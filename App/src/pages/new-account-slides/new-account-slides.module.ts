import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewAccountSlidesPage } from './new-account-slides';

@NgModule({
	declarations: [
		NewAccountSlidesPage,
	],
	imports: [
		IonicPageModule.forChild(NewAccountSlidesPage),
	],
})
export class NewAccountSlidesPageModule {}
