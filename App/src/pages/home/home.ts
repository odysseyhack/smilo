import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewAccountPage } from '../new-account/new-account';
import { RecoverAccountPage } from '../recover-account/recover-account';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	constructor(public navCtrl: NavController) {

	}

	goToNewAccountPage() {
		this.navCtrl.push(NewAccountPage);
	}

	goToRecoverAccountPage() {
		this.navCtrl.push(RecoverAccountPage);
	}

}
