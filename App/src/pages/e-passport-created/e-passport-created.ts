import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UnlockKeystorePage } from '../unlock-keystore/unlock-keystore';

@IonicPage()
@Component({
  selector: 'page-e-passport-created',
  templateUrl: 'e-passport-created.html',
})
export class EPassportCreatedPage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {

	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad EPassportCreatedPage');
	}

	goToUnlockKeystorePage(): void {
		this.navCtrl.push(UnlockKeystorePage);
	}
	
}
