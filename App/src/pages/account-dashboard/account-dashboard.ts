import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookFlightPage } from '../book-flight/book-flight';
import { CheckInPage } from '../check-in/check-in';
import { AccountProvider } from '../../providers/account-provider/account.provider';
import { BookedFlightsProvider } from '../../providers/booked-flights-provider/booked-flights-provider';

@IonicPage()
@Component({
	selector: 'page-account-dashboard',
	templateUrl: 'account-dashboard.html',
})
export class AccountDashboardPage {
	menuBarShown: boolean;
	accountName: string;

	constructor(
		private navCtrl: NavController, 
		private accountProvider: AccountProvider,
		private bookedFlightsProvider: BookedFlightsProvider
	) {
	}

	ionViewDidLoad() {
		this.accountName = this.accountProvider.getName();
	}

	goToBookFlight(): void {
		this.navCtrl.push(BookFlightPage);
	}

	goToCheckIn(): void {
		this.navCtrl.push(CheckInPage);
	}

	needsToCheckIn(): boolean {
		let booking = this.bookedFlightsProvider.getBookedFlights()[0];

		return booking && !booking.checkedIn;
	}
}
