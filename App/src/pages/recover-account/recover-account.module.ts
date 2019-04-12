import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecoverAccountPage } from './recover-account';
import { ComponentsBackButtonModule } from '../../components/components-back-button/components-back-button.module';

@NgModule({
	declarations: [
		RecoverAccountPage,
	],
	imports: [
		IonicPageModule.forChild(RecoverAccountPage),
		ComponentsBackButtonModule
	],
})
export class RecoverAccountPageModule {}
