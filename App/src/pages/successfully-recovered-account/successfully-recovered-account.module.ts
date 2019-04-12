import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuccessfullyRecoveredAccountPage } from './successfully-recovered-account';

@NgModule({
	declarations: [
		SuccessfullyRecoveredAccountPage,
	],
	imports: [
		IonicPageModule.forChild(SuccessfullyRecoveredAccountPage),
	],
})
export class SuccessfullyRecoveredAccountPageModule {}
