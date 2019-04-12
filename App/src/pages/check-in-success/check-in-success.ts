import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AccountDashboardPage } from '../account-dashboard/account-dashboard';

@IonicPage()
@Component({
  selector: 'page-check-in-success',
  templateUrl: 'check-in-success.html',
})
export class CheckInSuccessPage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		
	}

	ionViewDidLoad() {

	}

	goToAccountDashboardPage(): void {
		this.navCtrl.push(AccountDashboardPage);
	}

}
