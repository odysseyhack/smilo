import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookSuccessPage } from './book-success';

@NgModule({
	declarations: [
		BookSuccessPage,
	],
	imports: [
		IonicPageModule.forChild(BookSuccessPage),
	],
})
export class BookSuccessPageModule {}
