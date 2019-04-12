import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { GateCheckInPage } from '../pages/gate-check-in/gate-check-in';
import { TitleProvider } from '../providers/title-provider';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GateCheckInPageModule } from '../pages/gate-check-in/gate-check-in.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
	declarations: [
		MyApp
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		FontAwesomeModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient]
			}
		}),
		IonicModule.forRoot(MyApp),
		GateCheckInPageModule
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		GateCheckInPage
	],
	providers: [
		StatusBar,
		TitleProvider,
		SplashScreen,
		{
			provide: ErrorHandler, 
			useClass: IonicErrorHandler
		}
	]
})
export class AppModule {}
