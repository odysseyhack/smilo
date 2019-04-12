import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateEIdentityPage } from './create-e-identity';

@NgModule({
	declarations: [
		CreateEIdentityPage,
	],
	imports: [
		IonicPageModule.forChild(CreateEIdentityPage),
	]
})
export class CreateEIdentityPageModule {}
