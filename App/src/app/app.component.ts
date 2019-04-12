import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { NewAccountPage } from '../pages/new-account/new-account';
import { NewAccountSlidesPage } from '../pages/new-account-slides/new-account-slides';
import { CreateEIdentityPage } from '../pages/create-e-identity/create-e-identity';
import { CreateEPassportPage } from '../pages/create-e-passport/create-e-passport';
import { UnlockKeystorePage } from '../pages/unlock-keystore/unlock-keystore';
import { EIdentityCreatedPage } from '../pages/e-identity-created/e-identity-created';
import { AccountDashboardPage } from '../pages/account-dashboard/account-dashboard';
import { TranslateService } from '@ngx-translate/core';
import { WalletProvider } from '../providers/wallet-provider/wallet-provider';
@Component({
  	templateUrl: 'app.html'
})
export class KLMApp {
	rootPage: any = NewAccountPage;

	constructor(private platform: Platform, 
				private statusBar: StatusBar, 
				private splashScreen: SplashScreen,
                private walletProvider: WalletProvider) {
		this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            if (this.walletProvider.keystoreExists()) {
                this.rootPage = UnlockKeystorePage;
            } else {
                this.rootPage = HomePage;
            }
        }, (error) => {
            console.error("Platform Ready Error", error);
        });
	}
}

