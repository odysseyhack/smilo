import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TravelPage } from './travel';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
	declarations: [
		TravelPage,
	],
	imports: [
		IonicPageModule.forChild(TravelPage),
		NgxQRCodeModule
	],
})
export class TravelPageModule {}
