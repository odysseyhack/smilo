import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateEPassportPage } from './create-e-passport';

@NgModule({
	declarations: [
		CreateEPassportPage,
	],
	imports: [
		IonicPageModule.forChild(CreateEPassportPage),
	],
})
export class CreateEPassportPageModule {}
