import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UnlockKeystorePage } from '../unlock-keystore/unlock-keystore';

@IonicPage()
@Component({
	selector: 'page-successfully-recovered-account',
	templateUrl: 'successfully-recovered-account.html',
})
export class SuccessfullyRecoveredAccountPage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {

	}

	ionViewDidLoad() {

	}

	goToUnlockKeystorePage(): void {
		this.navCtrl.push(UnlockKeystorePage);
	}

}
