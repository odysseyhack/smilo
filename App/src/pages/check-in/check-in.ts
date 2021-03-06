import { Component, ElementRef, ViewChild, OnDestroy, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CheckInSuccessPage } from '../check-in-success/check-in-success';
import { FaceVectorProvider, IFaceScanResult } from '../../providers/face-vector/face-vector.provider';
import { IdentityProvider } from '../../providers/identity-provider/identity.provider';
import { BookedFlightsProvider } from '../../providers/booked-flights-provider/booked-flights-provider';
import { IBookedFlight } from '../../interfaces/IBookedFlight';
import { ContractProvider } from '../../providers/contract-provider/contract-provider';
import { ITrusted } from '../../interfaces/ITrusted';

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

	public isCheckingIn: boolean;
	public checkingError: string;

	public isProcessingImage: boolean;
	public imageFailed: boolean;

	constructor(
		private navCtrl: NavController,
		private faceVectorProvider: FaceVectorProvider,
		private identityProvider: IdentityProvider,
		private bookedFlightsProvider: BookedFlightsProvider,
		private contractProvider: ContractProvider
	) {
		
	}

	async ngOnInit() {
		this.booking = this.bookedFlightsProvider.getBookedFlight();

		setTimeout(async () => {
			await this.startVideo();
	
			await this.faceVectorProvider.initialize();
		}, 1000);
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
	}

	stopVideo() {
		if(this.stream) {
			this.stream.getTracks().forEach(x => x.stop());

			if(this.timeoutId != -1) {
				clearTimeout(this.timeoutId);
			}
		}
	}

	processFrame() {
		this.isProcessingImage = true;
		this.imageFailed = false;
		setTimeout(async () => {
			const faceScan = await this.faceVectorProvider.startFaceAnalysis(this.videoPlayer.nativeElement);

			if(faceScan && faceScan.confidence > 0.95) {
				this.faceScan = faceScan;
	
				this.identityProvider.setFaceVectors(this.faceScan.vectors);
	
				this.stopVideo();
	
				this.processCheckIn();
			} else {
				// Could not take proper picture
				this.imageFailed = true;
				this.isProcessingImage = false;
			}
		}, 10)
	}

	async processCheckIn() {
		this.checkingError = null;
		try {
			this.isCheckingIn = true;

			await this.contractProvider.setVectors();
			
			this.bookedFlightsProvider.markBookedFlightAsCheckedIn();

			this.isCheckingIn = false;
		}
		catch(ex) {
			this.checkingError = ex;
			return;
		}
		
		this.navCtrl.push(CheckInSuccessPage);
	}
}
