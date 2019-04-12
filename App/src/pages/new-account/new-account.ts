import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewAccountSlidesPage } from '../new-account-slides/new-account-slides';
import { WalletProvider } from '../../providers/wallet-provider/wallet-provider';
import { AccountProvider } from '../../providers/account-provider/account.provider';
import { FaucetProvider } from '../../providers/faucet-provider/faucet-provider';

@IonicPage()
@Component({
	selector: 'page-new-account',
	templateUrl: 'new-account.html',
})
export class NewAccountPage {
	userName: string;
	password: string;
	passwordReEnter: string;
	passwordInfo: string;

	constructor(
		private navCtrl: NavController, 
		private walletProvider: WalletProvider,
		private accountProvider: AccountProvider,
		private faucetProvider: FaucetProvider
	) {
		
	}

	async createKeyStore() {
		this.accountProvider.setPassword(this.password);
		this.accountProvider.setName(this.userName);
		try {
			this.walletProvider.createNew();
			console.log('Requesting funds:', this.walletProvider.getPublicKey());
			let requestResult = await this.faucetProvider.requestFunds(this.walletProvider.getPublicKey());
			console.log('requestFundsResult:', requestResult);
			this.navCtrl.push(NewAccountSlidesPage);
		} catch (error) {
			console.error(error);
		}
	}

	onPasswordChanged(): void {
        if (this.password && this.password === this.passwordReEnter) {
            this.passwordInfo = "";
        } else {
            this.passwordInfo = "Passwords do not match";
        }
    }
}
