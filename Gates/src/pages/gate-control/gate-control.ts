import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from "@angular/core";
import { FaceVectorProvider, IFaceScanResult } from "../../providers/face-vector/face-vector.provider";
import { AuthProvider } from "../../providers/auth/auth.provider";

declare type ScanState = "loading" | "default" | "processing" | "allowed" | "denied";

@Component({
    selector: 'page-gate-control',
    templateUrl: 'gate-control.html'
})
export class GateControlPage implements OnInit, OnDestroy {

    @ViewChild("videoplayer")
    private videoPlayer: ElementRef;

    private stream: MediaStream;

	private timeoutId: any;

    public faceScan: IFaceScanResult;
    
    public state: ScanState = "loading";

    constructor(
        private faceVectorProvider: FaceVectorProvider,
        private authProvider: AuthProvider
    ) {

    }

    async ngOnInit() {
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

		const video: HTMLVideoElement = this.videoPlayer.nativeElement;

		this.stream = await navigator.mediaDevices.getUserMedia(constraints);

		video.srcObject = this.stream;

		setTimeout(() => {
			this.state = "default";
			this.scheduleNextFrameToProcess();
		}, 10000);
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
		}, 100);
	}

	async processFrame() {
		const faceScan = await this.faceVectorProvider.startFaceAnalysis(this.videoPlayer.nativeElement);

		if(faceScan && this.hasFace(faceScan) && this.isHappy(faceScan)) {			
			this.faceScan = faceScan;
            
            this.state = "processing";
            
            let allowed = await this.authProvider.isAllowed(this.faceScan.vectors);
            this.state = allowed ? "allowed" : "denied";

            setTimeout(() => {
                this.state = "default";
                this.scheduleNextFrameToProcess();
            }, 5000);
		} else {
			this.scheduleNextFrameToProcess();
		}
    }

    private hasFace(faceScan: IFaceScanResult): boolean {
        return faceScan.confidence > 0.95;
    }
    private isHappy(faceScan: IFaceScanResult): boolean {
		return true;
        // return faceScan.expressions.find(x => x.expression == "happy").probability > 0.8;
    }
}