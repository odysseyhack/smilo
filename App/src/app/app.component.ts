import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { NewAccountPage } from '../pages/new-account/new-account';
import { UnlockKeystorePage } from '../pages/unlock-keystore/unlock-keystore';
import { WalletProvider } from '../providers/wallet-provider/wallet-provider';
import { AccountProvider } from '../providers/account-provider/account.provider';
import { IdentityProvider } from '../providers/identity-provider/identity.provider';
import { BookedFlightsProvider } from '../providers/booked-flights-provider/booked-flights-provider';
import { ContractProvider } from '../providers/contract-provider/contract-provider';
@Component({
  	templateUrl: 'app.html'
})
export class KLMApp {
	rootPage: any;

	constructor(
        private platform: Platform, 
        private accountProvider: AccountProvider,
        private walletProvider: WalletProvider,
        private identityProvider: IdentityProvider,
        private bookedFlightsProvider: BookedFlightsProvider,
        private contractProvider: ContractProvider
    ) {
		this.platform.ready().then(async () => {

            if (this.accountProvider.accountExists()) {
                this.rootPage = UnlockKeystorePage;
            } else {
                this.rootPage = HomePage;
            }
        }, (error) => {
            console.error("Platform Ready Error", error);
        });
	}
}

