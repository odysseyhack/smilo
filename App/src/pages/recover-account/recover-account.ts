import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SuccessfullyRecoveredAccountPage } from '../successfully-recovered-account/successfully-recovered-account';

@IonicPage()
@Component({
  selector: 'page-recover-account',
  templateUrl: 'recover-account.html',
})
export class RecoverAccountPage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {

	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad RecoverAccountPage');
	}

	processImportAccount(): void {
		this.navCtrl.push(SuccessfullyRecoveredAccountPage);
	}
}
