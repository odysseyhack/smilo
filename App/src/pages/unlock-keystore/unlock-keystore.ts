import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AccountDashboardPage } from '../account-dashboard/account-dashboard';
import { WalletProvider } from '../../providers/wallet-provider/wallet-provider';
import { AccountProvider } from '../../providers/account-provider/account.provider';
import { IdentityProvider } from '../../providers/identity-provider/identity.provider';

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
		private walletProvider: WalletProvider,
		private accountProvider: AccountProvider,
		private identityProvider: IdentityProvider
	) {

	}

	ionViewDidLoad() {

	}

	goToAccountDashboardPage() {
		
	}

	unlockKeystore(): void {
		if(this.accountProvider.isCorrectPassword(this.password)) {
			this.accountProvider.setPassword(this.password);

			this.walletProvider.unlock();
			this.identityProvider.restoreIdentity();
			
            this.passwordError = "";
			this.navCtrl.push(AccountDashboardPage);
		} else {
			this.passwordError = "Incorrect password";
		}    
    }
}
