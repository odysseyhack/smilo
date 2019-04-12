import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UnlockKeystorePage } from './unlock-keystore';

@NgModule({
	declarations: [
		UnlockKeystorePage,
	],
	imports: [
		IonicPageModule.forChild(UnlockKeystorePage),
	],
})
export class UnlockKeystorePageModule {}
