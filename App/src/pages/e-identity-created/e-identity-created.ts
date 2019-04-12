import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreateEPassportPage } from '../create-e-passport/create-e-passport';

@IonicPage()
@Component({
  selector: 'page-e-identity-created',
  templateUrl: 'e-identity-created.html',
})
export class EIdentityCreatedPage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {

	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad EIdentityCreatedPage');
	}

	goToCreateEPassPort(): void {
		this.navCtrl.push(CreateEPassportPage);
	}
}
