import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountDashboardPage } from './account-dashboard';
import { ComponentsModule } from '../../components/components-menu-bar/components.module';

@NgModule({
	declarations: [
		AccountDashboardPage,
	],
	imports: [
		IonicPageModule.forChild(AccountDashboardPage),
		ComponentsModule
	],
})
export class AccountDashboardPageModule {}
