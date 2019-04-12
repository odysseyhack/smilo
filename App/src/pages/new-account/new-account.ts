import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewAccountSlidesPage } from '../new-account-slides/new-account-slides';
import { WalletProvider } from '../../providers/wallet-provider/wallet-provider';

@IonicPage()
@Component({
	selector: 'page-new-account',
	templateUrl: 'new-account.html',
})
export class NewAccountPage {
	password: string;
	passwordReEnter: string;
	passwordInfo: string;

	constructor(private navCtrl: NavController, 
				private navParams: NavParams,
				private walletProvider: WalletProvider) {
		
	}

	ionViewDidLoad() {

	}

	createKeyStore() {
		try {
			this.walletProvider.createNewKeystore(this.password);
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
