import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateEPassportPage } from './create-e-passport';
import { NgQrScannerModule } from 'angular2-qrscanner';

@NgModule({
	declarations: [
		CreateEPassportPage,
	],
	imports: [
		IonicPageModule.forChild(CreateEPassportPage),
		NgQrScannerModule
	],
})
export class CreateEPassportPageModule {}
