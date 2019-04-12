import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckInPage } from './check-in';
import { ComponentsBackButtonModule } from '../../components/components-back-button/components-back-button.module';

@NgModule({
	declarations: [
		CheckInPage,
	],
	imports: [
		IonicPageModule.forChild(CheckInPage),
		ComponentsBackButtonModule
	],
})
export class CheckInPageModule {}
