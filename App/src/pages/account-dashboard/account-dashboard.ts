import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookFlightPage } from '../book-flight/book-flight';
import { CheckInPage } from '../check-in/check-in';

@IonicPage()
@Component({
	selector: 'page-account-dashboard',
	templateUrl: 'account-dashboard.html',
})
export class AccountDashboardPage {
	menuBarShown: boolean;

	constructor(private navCtrl: NavController, 
				private navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad AccountDashboardPage');
	}

	goToBookFlight(): void {
		this.navCtrl.push(BookFlightPage);
	}

	goToCheckIn(): void {
		this.navCtrl.push(CheckInPage);
	}
}
