import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, Platform } from 'ionic-angular';
import { QrScannerComponent } from 'angular2-qrscanner';

declare function startCamera();
declare function startVideo(Function);
declare function stopGetSmileInterval();

@IonicPage()
@Component({
  selector: 'page-gate-check-in',
  templateUrl: 'gate-check-in.html'
})
export class GateCheckInPage {

	@ViewChild("videoplayer")
    videoPlayer: ElementRef;

    @ViewChild(QrScannerComponent) 
    qrScannerComponent: QrScannerComponent;

	camStep: number = 0;
    publicKey: string;
    doFlashCamera: boolean;
    whatToDo: string;

	constructor(private platform: Platform) {}

	ionViewDidLoad() {
        this.openQRScanner();
    }
    
    manualPhoto() {
        if (this.camStep == 1) {
            this.takePhoto();
        }
    }

	getSmileScore(): void {
        this.whatToDo = "Please show your QR code";
		startVideo((smileScore: number) => {
			if (smileScore < 0.1) {
				this.camStep = 1;
				this.whatToDo = "Face not detected. Please center your face and try to make an O face to detect your face.";
			} else if (smileScore >= 0.1 && smileScore <= 0.6) {
				this.camStep = 2;
				this.whatToDo = "Face detected. Smile to check in!";
			} else if (smileScore > 0.6) {
				this.takePhoto();
			}
		});
	}

	takePhoto(): void {
		this.whatToDo = "Taking picture!";
        this.camStep = 3;
        this.flashCamera();
		stopGetSmileInterval();
		let vid: any = document.getElementById('videoel');
		vid.pause();
    }

    isMobile(): boolean {
        return this.platform.is("android") || this.platform.is("ios");
    }
    
    openQRScanner(): void {
        let cameraSide = "front";
        if (this.isMobile()) {
            cameraSide = "back";
        }
        this.whatToDo = "Please show your QR code";
        this.qrScannerComponent.getMediaDevices().then(devices => {
            const videoDevices: MediaDeviceInfo[] = [];
            for (const device of devices) {
                if (device.kind.toString() === 'videoinput') {
                    videoDevices.push(device);
                }
            }
            if (videoDevices.length > 0) {
                let choosenDev;
                for (const dev of videoDevices) {
                    if (dev.label.includes(cameraSide)){
                        choosenDev = dev;
                        break;
                    }
                }
                if (choosenDev) {
                    this.qrScannerComponent.chooseCamera.next(choosenDev);
                } else {
                    this.qrScannerComponent.chooseCamera.next(videoDevices[0]);
                }
            }
        });
 
        this.qrScannerComponent.capturedQr.subscribe(result => {
            if (result && JSON.parse(result) && JSON.parse(result).address) {
                startCamera();
                this.getSmileScore();
                this.publicKey = JSON.parse(result).address;
                this.qrScannerComponent.stopScanning();
                this.flashCamera();
            }
        });
    }

    flashCamera() {
        this.doFlashCamera = true;
        setTimeout(() => {
            this.doFlashCamera = false;
        }, 1000);
    }
}
