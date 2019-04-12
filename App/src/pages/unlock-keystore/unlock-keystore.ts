import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AccountDashboardPage } from '../account-dashboard/account-dashboard';
import { AccountProvider } from '../../providers/account-provider/account.provider';

@IonicPage()
@Component({
	selector: 'page-unlock-keystore',
	templateUrl: 'unlock-keystore.html',
})
export class UnlockKeystorePage {
	password: string;
	passwordError: string;
	wrongPasswordText: string

	constructor(
		private navCtrl: NavController,
		private accountProvider: AccountProvider
	) {

	}

	unlockKeystore(): void {
		if (this.accountProvider.isCorrectPassword(this.password)) {
			this.accountProvider.setPassword(this.password);
			this.navCtrl.push(AccountDashboardPage);
		} else {
			this.passwordError = "Incorrect password";
		}
	}
}
