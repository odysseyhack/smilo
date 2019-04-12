import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CheckInSuccessPage } from '../check-in-success/check-in-success';

@IonicPage()
@Component({
	selector: 'page-check-in',
	templateUrl: 'check-in.html',
})
export class CheckInPage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {

	}

	ionViewDidLoad() {

	}

	processCheckIn(): void {
		this.navCtrl.push(CheckInSuccessPage);
	}

	takePhoto(): void {
		
	}
}
