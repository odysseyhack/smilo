import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { CreateEIdentityPage } from '../create-e-identity/create-e-identity';

@IonicPage()
@Component({
	selector: 'page-new-account-slides',
	templateUrl: 'new-account-slides.html',
})
export class NewAccountSlidesPage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		
	}

	ionViewDidEnter() {

	}

	goToCreateEIdentityPage(): void {
		this.navCtrl.push(CreateEIdentityPage);
	}
}
