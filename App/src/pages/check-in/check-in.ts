import { Component, ElementRef, ViewChild, OnDestroy, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CheckInSuccessPage } from '../check-in-success/check-in-success';
import { FaceVectorProvider, IFaceScanResult } from '../../providers/face-vector/face-vector.provider';
import { IdentityProvider } from '../../providers/identity-provider/identity.provider';
import { BookedFlightsProvider } from '../../providers/booked-flights-provider/booked-flights-provider';
import { IBookedFlight } from '../../interfaces/IBookedFlight';
import { ContractProvider } from '../../providers/contract-provider/contract-provider';

@IonicPage()
@Component({
	selector: 'page-check-in',
	templateUrl: 'check-in.html',
})
export class CheckInPage implements OnDestroy, OnInit {

	@ViewChild("videoplayer")
	public videoPlayer: ElementRef;

	private stream: MediaStream;

	private timeoutId: any;

	public faceScan: IFaceScanResult;

	public booking: IBookedFlight;

	constructor(
		private navCtrl: NavController,
		private faceVectorProvider: FaceVectorProvider,
		private identityProvider: IdentityProvider,
		private bookedFlightsProvider: BookedFlightsProvider,
		private contractProvider: ContractProvider
	) {

	}

	async ngOnInit() {
		this.booking = this.bookedFlightsProvider.getBookedFlights()[0];

		await this.faceVectorProvider.initialize();
		
		await this.startVideo();
	}

	ngOnDestroy() {
		this.stopVideo();
	}

	async startVideo() {
		const constraints = {
			video: true
		};

		const video = this.videoPlayer.nativeElement;

		this.stream = await navigator.mediaDevices.getUserMedia(constraints);

		video.srcObject = this.stream;

		this.scheduleNextFrameToProcess();
	}

	stopVideo() {
		if(this.stream) {
			this.stream.getTracks().forEach(x => x.stop());

			if(this.timeoutId != -1) {
				clearTimeout(this.timeoutId);
			}
		}
	}

	scheduleNextFrameToProcess() {
		this.timeoutId = setTimeout(async () => {
			this.processFrame();
		}, 500);
	}

	async processFrame() {
		const faceScan = await this.faceVectorProvider.startFaceAnalysis(this.videoPlayer.nativeElement);

		if(faceScan.confidence > 0.95) {
			this.faceScan = faceScan;

			this.identityProvider.setFaceVectors(this.faceScan.vectors);

			this.stopVideo();

			this.processCheckIn();
		} else {
			this.scheduleNextFrameToProcess();
		}
	}

	processCheckIn(): void {
		this.contractProvider.setVectors();
		// this.booking.checkedIn = true;

		// this.navCtrl.push(CheckInSuccessPage);
	}
}
