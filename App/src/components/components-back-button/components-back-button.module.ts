import { NgModule } from '@angular/core';
import { ComponentsBackButtonComponent } from './components-back-button';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from 'ionic-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
	declarations: [ComponentsBackButtonComponent],
	imports: [
		TranslateModule,
		FontAwesomeModule,
		IonicModule
	],
	exports: [ComponentsBackButtonComponent]
})

export class ComponentsBackButtonModule {}
