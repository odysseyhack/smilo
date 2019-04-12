import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { KLMApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewAccountPage } from '../pages/new-account/new-account';
import { NewAccountSlidesPage } from '../pages/new-account-slides/new-account-slides';
import { CreateEIdentityPage } from '../pages/create-e-identity/create-e-identity';
import { CreateEPassportPage } from '../pages/create-e-passport/create-e-passport';
import { UnlockKeystorePage } from '../pages/unlock-keystore/unlock-keystore';
import { AccountDashboardPage } from '../pages/account-dashboard/account-dashboard';
import { EIdentityCreatedPage } from '../pages/e-identity-created/e-identity-created';
import { EPassportCreatedPage } from '../pages/e-passport-created/e-passport-created';
import { AccountDashboardPageModule } from '../pages/account-dashboard/account-dashboard.module';
import { NewAccountPageModule } from '../pages/new-account/new-account.module';
import { NewAccountSlidesPageModule } from '../pages/new-account-slides/new-account-slides.module';
import { CreateEIdentityPageModule } from '../pages/create-e-identity/create-e-identity.module';
import { CreateEPassportPageModule } from '../pages/create-e-passport/create-e-passport.module';
import { UnlockKeystorePageModule } from '../pages/unlock-keystore/unlock-keystore.module';
import { EIdentityCreatedPageModule } from '../pages/e-identity-created/e-identity-created.module';
import { EPassportCreatedPageModule } from '../pages/e-passport-created/e-passport-created.module';
import { HomePageModule } from '../pages/home/home.module';
import { RecoverAccountPageModule } from '../pages/recover-account/recover-account.module';
import { RecoverAccountPage } from '../pages/recover-account/recover-account';
import { SuccessfullyRecoveredAccountPageModule } from '../pages/successfully-recovered-account/successfully-recovered-account.module';
import { SuccessfullyRecoveredAccountPage } from '../pages/successfully-recovered-account/successfully-recovered-account';
import { BookFlightPageModule } from '../pages/book-flight/book-flight.module';
import { BookFlightPage } from '../pages/book-flight/book-flight';
import { BookSuccessPageModule } from '../pages/book-success/book-success.module';
import { BookSuccessPage } from '../pages/book-success/book-success';
import { CheckInPageModule } from '../pages/check-in/check-in.module';
import { CheckInPage } from '../pages/check-in/check-in';
import { CheckInSuccessPageModule } from '../pages/check-in-success/check-in-success.module';
import { CheckInSuccessPage } from '../pages/check-in-success/check-in-success';
import { StorageProvider } from '../providers/storage-provider/storage-provider';
import { WalletProvider } from '../providers/wallet-provider/wallet-provider';
import { TranslateService } from '@ngx-translate/core';
import { TranslateStore } from '@ngx-translate/core/src/translate.store';
import { BookedFlightsProvider } from '../providers/booked-flights-provider/booked-flights-provider';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { TravelPage } from '../pages/travel/travel';
import { TravelPageModule } from '../pages/travel/travel.module';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { AccountProvider } from '../providers/account-provider/account.provider';
import { IdentityProvider } from '../providers/identity-provider/identity.provider';

@NgModule({
	declarations: [
		KLMApp
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(KLMApp),
		FontAwesomeModule,
		HomePageModule,
		NewAccountPageModule,
		NewAccountSlidesPageModule,
		CreateEIdentityPageModule,
		CreateEPassportPageModule,
		UnlockKeystorePageModule,
		AccountDashboardPageModule,
		EIdentityCreatedPageModule,
		EPassportCreatedPageModule,
		RecoverAccountPageModule,
		SuccessfullyRecoveredAccountPageModule,
		BookFlightPageModule,
		BookSuccessPageModule,
		CheckInPageModule,
		CheckInSuccessPageModule,
		TravelPageModule,
		NgxQRCodeModule
	],
	bootstrap: [IonicApp],
	entryComponents: [
		KLMApp,
		HomePage,
		NewAccountPage,
		NewAccountSlidesPage,
		CreateEIdentityPage,
		CreateEPassportPage,
		UnlockKeystorePage,
		AccountDashboardPage,
		EIdentityCreatedPage,
		EPassportCreatedPage,
		RecoverAccountPage,
		SuccessfullyRecoveredAccountPage,
		BookFlightPage,
		BookSuccessPage,
		CheckInPage,
		CheckInSuccessPage,
		TravelPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		{provide: ErrorHandler, useClass: IonicErrorHandler},
		StorageProvider,
		WalletProvider,
		BookedFlightsProvider,
		AccountProvider,
		IdentityProvider
	]
})
export class AppModule {
    constructor() {
        library.add(faSpinner, faArrowLeft);
    }
}
