import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AccountDashboardPage } from '../account-dashboard/account-dashboard';
import { IBookedFlight } from '../../interfaces/IBookedFlight';
import { ContractProvider } from '../../providers/contract-provider/contract-provider';

@IonicPage()
@Component({
  selector: 'page-book-success',
  templateUrl: 'book-success.html',
})
export class BookSuccessPage {
	bookedFlight: IBookedFlight;

	constructor(public navCtrl: NavController,
				public navParams: NavParams,
				private contractProvider: ContractProvider) {
		this.bookedFlight = this.navParams.get("bookedFlight");
	}

	ionViewDidLoad() {

	}

	goToAccountDashboard(): void {
		this.navCtrl.push(AccountDashboardPage);
	}
}
