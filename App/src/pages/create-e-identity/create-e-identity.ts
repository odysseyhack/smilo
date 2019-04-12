import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EIdentityCreatedPage } from '../e-identity-created/e-identity-created';
import { IdentityProvider } from '../../providers/identity-provider/identity.provider';

@IonicPage()
@Component({
	selector: 'page-create-e-identity',
	templateUrl: 'create-e-identity.html',
})
export class CreateEIdentityPage {
	fullName: string;
	dateOfBirth: string;
	nationality: string;

	constructor(
		private navCtrl: NavController,
		private identityProvider: IdentityProvider
	) {}

	goToEIdentityCreatedPage() {
		this.identityProvider.setIdentity(this.fullName, new Date(this.dateOfBirth), this.nationality);

		this.navCtrl.push(EIdentityCreatedPage);
	}
}
