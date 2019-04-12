import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GateCheckInPage } from './gate-check-in';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ComponentsTopBarModule }  from '../../components/components-top-bar/components.module';
import { ComponentsBottomBarModule } from '../../components/components-bottom-bar/components.module';
import { NgQrScannerModule } from 'angular2-qrscanner';

@NgModule({
	declarations: [
		GateCheckInPage,
	],
	imports: [
		IonicPageModule.forChild(GateCheckInPage),
		TranslateModule,
		FontAwesomeModule,
		ComponentsTopBarModule,
		ComponentsBottomBarModule,
		NgQrScannerModule
	]
})
export class GateCheckInPageModule {}
