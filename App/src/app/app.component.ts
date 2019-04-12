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
@Component({
  	templateUrl: 'app.html'
})
export class KLMApp {
	rootPage: any = NewAccountPage;

	constructor(
        private platform: Platform, 
        private statusBar: StatusBar, 
        private splashScreen: SplashScreen,
        private accountProvider: AccountProvider,
        private walletProvider: WalletProvider,
        private identityProvider: IdentityProvider
    ) {
		this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
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

