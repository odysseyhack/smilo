import { NgModule } from '@angular/core';
import { ComponentsMenuBarComponent } from './components-menu-bar';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from 'ionic-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
	declarations: [ComponentsMenuBarComponent],
	imports: [
		TranslateModule,
		FontAwesomeModule,
		IonicModule
	],
	exports: [ComponentsMenuBarComponent]
})

export class ComponentsModule {}
