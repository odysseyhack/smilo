import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AccountDashboardPage } from '../account-dashboard/account-dashboard';
import { IBookedFlight } from '../../interfaces/IBookedFlight';

@IonicPage()
@Component({
  selector: 'page-book-success',
  templateUrl: 'book-success.html',
})
export class BookSuccessPage {
	bookedFlight: IBookedFlight;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.bookedFlight = this.navParams.get("bookedFlight");
	}

	ionViewDidLoad() {

	}

	goToAccountDashboard(): void {
		this.navCtrl.push(AccountDashboardPage);
	}
}
