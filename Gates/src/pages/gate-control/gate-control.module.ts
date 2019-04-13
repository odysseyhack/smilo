import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ComponentsTopBarModule }  from '../../components/components-top-bar/components.module';
import { ComponentsBottomBarModule } from '../../components/components-bottom-bar/components.module';
import { GateControlPage } from './gate-control';

@NgModule({
	declarations: [
		GateControlPage,
	],
	imports: [
		IonicPageModule.forChild(GateControlPage),
		TranslateModule,
		FontAwesomeModule,
		ComponentsTopBarModule,
		ComponentsBottomBarModule
	]
})
export class GateControlPageModule {}
