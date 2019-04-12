import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewAccountSlidesPage } from '../new-account-slides/new-account-slides';
import { EIdentityCreatedPage } from '../e-identity-created/e-identity-created';

@IonicPage()
@Component({
	selector: 'page-create-e-identity',
	templateUrl: 'create-e-identity.html',
})
export class CreateEIdentityPage {
	fullName: string;
	dateOfBirth: string;
	nationality: string;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad CreateEIdentityPage');
	}

	goToEIdentityCreatedPage() {
		this.navCtrl.push(EIdentityCreatedPage);
	}
}
