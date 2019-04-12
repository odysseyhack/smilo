import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckInSuccessPage } from './check-in-success';

@NgModule({
	declarations: [
		CheckInSuccessPage,
	],
	imports: [
		IonicPageModule.forChild(CheckInSuccessPage),
	],
})
export class CheckInSuccessPageModule {}
