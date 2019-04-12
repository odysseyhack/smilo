import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EIdentityCreatedPage } from './e-identity-created';

@NgModule({
	declarations: [
		EIdentityCreatedPage,
	],
	imports: [
		IonicPageModule.forChild(EIdentityCreatedPage),
	],
})
export class EIdentityCreatedPageModule {}
