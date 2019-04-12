import { NgModule } from '@angular/core';
import { ComponentsBottomBar } from './components-bottom-bar';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from 'ionic-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
	declarations: [ComponentsBottomBar],
	imports: [
		TranslateModule,
		FontAwesomeModule,
		IonicModule
	],
	exports: [ComponentsBottomBar]
})

export class ComponentsBottomBarModule {}
