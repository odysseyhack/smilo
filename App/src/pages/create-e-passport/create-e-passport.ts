import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EPassportCreatedPage } from '../e-passport-created/e-passport-created';

@IonicPage()
@Component({
	selector: 'page-create-e-passport',
	templateUrl: 'create-e-passport.html',
})
export class CreateEPassportPage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {

	}

	ionViewDidLoad() {

	}

	goToEPassportCreatedPage() {
		this.navCtrl.push(EPassportCreatedPage);
	}
}
