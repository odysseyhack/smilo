import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AccountDashboardPage } from '../account-dashboard/account-dashboard';
import { WalletProvider } from '../../providers/wallet-provider/wallet-provider';

@IonicPage()
@Component({
  selector: 'page-unlock-keystore',
  templateUrl: 'unlock-keystore.html',
})
export class UnlockKeystorePage {
	password: string;
    passwordError: string;
    wrongPasswordText: string

	constructor(public navCtrl: NavController, 
				public navParams: NavParams,
				private walletProvider: WalletProvider) {

	}

	ionViewDidLoad() {

	}

	goToAccountDashboardPage() {
		
	}

	unlockKeystore(): void {
        try {
            this.walletProvider.unlockKeystore(this.password);
            this.passwordError = "";
			this.navCtrl.push(AccountDashboardPage);
        } catch(error) {
            this.passwordError = "Incorrect password";
        }       
    }
}
