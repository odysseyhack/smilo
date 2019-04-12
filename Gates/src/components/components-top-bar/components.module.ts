import { NgModule } from '@angular/core';
import { ComponentsTopBar } from './components-top-bar';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from 'ionic-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
	declarations: [ComponentsTopBar],
	imports: [
		TranslateModule,
		FontAwesomeModule,
		IonicModule
	],
	exports: [ComponentsTopBar]
})

export class ComponentsTopBarModule {}
