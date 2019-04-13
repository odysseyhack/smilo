import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookFlightPage } from './book-flight';
import { ComponentsBackButtonModule } from '../../components/components-back-button/components-back-button.module';

@NgModule({
	declarations: [
		BookFlightPage,
	],
	imports: [
		IonicPageModule.forChild(BookFlightPage),
		ComponentsBackButtonModule
	],
})
export class BookFlightPageModule {}
