import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { EPassportCreatedPage } from '../e-passport-created/e-passport-created';
import { QrScannerComponent } from 'angular2-qrscanner';
import { takeUntil, map, first } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { IdentityProvider } from '../../providers/identity-provider/identity.provider';

@IonicPage()
@Component({
	selector: 'page-create-e-passport',
	templateUrl: 'create-e-passport.html',
})
export class CreateEPassportPage {
	
	@ViewChild("videoplayer")
    videoPlayer: ElementRef;

    @ViewChild(QrScannerComponent) 
	qrScannerComponent: QrScannerComponent;
	
	doFlashCamera = false;

	passport: string;

	constructor(
		private navCtrl: NavController,
		private platform: Platform,
		private identityProvider: IdentityProvider
	) {}

	ionViewDidLoad() {
		this.prepareVideoPlayer();
		this.qrScannerComponent.capturedQr.pipe(
			first()
		).subscribe(result => {
			this.passport = result;

			this.identityProvider.setPassport(this.passport);
		});
	}

	goToEPassportCreatedPage() {
		this.navCtrl.push(EPassportCreatedPage);
	}

	isMobile(): boolean {
        return this.platform.is("android") || this.platform.is("ios");
	}
	
	getPreferredCameraSide(): string {
		return this.isMobile() ? "back" : "front";
	}

	prepareVideoPlayer() {
		let cameraSide = this.getPreferredCameraSide();

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
	}
}
