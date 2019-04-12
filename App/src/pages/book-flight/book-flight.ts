import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookSuccessPage } from '../book-success/book-success';
import { BookedFlightsProvider } from '../../providers/booked-flights-provider/booked-flights-provider';
import { IBookedFlight } from '../../interfaces/IBookedFlight';

@IonicPage()
@Component({
	selector: 'page-book-flight',
	templateUrl: 'book-flight.html',
})
export class BookFlightPage {
	from: string;
	to: string;
	date: Date;
	travellers: string;
	cities = [
		"Amsterdam",
		"Barcelona",
		"Manila",
		"Moscow",
		"Tokyo",
		"Dhaka",
		"Istanbul",
		"Karachi",
		"Beijing",
		"Shanghai",
		"Mumbai",
		"Tianjin",
		"Paris",
		"Berlin"
	];

	constructor(private navCtrl: NavController, 
				private navParams: NavParams,
				private bookedFlightsProvider: BookedFlightsProvider) {
		this.from = this.getRandomCity();
		let toRandomCity = this.getRandomCity();
		while (toRandomCity === this.from) {
			toRandomCity = this.getRandomCity();
		}
		this.to = toRandomCity;
		this.date = new Date();
		let randomAddDays = Math.floor(Math.random() * 50) + 1;
		this.date.setDate(this.date.getDate() + randomAddDays);
		let randomNumber = Math.floor(Math.random() * 10) + 1;
		let adultText = randomNumber == 1 ? " Adult" : " Adults";
		this.travellers = randomNumber + adultText;
		console.log(this.date);
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad BookFlightPage');
	}

	processBookFlight(): void {
		let bookedFlight = <IBookedFlight>{
			from: this.from,
			to: this.to,
			date: this.date,
			travellers: this.travellers,
			flightId: "KLM-" + this.makeid(8),
			smartContractAddress: "0x28r1289hd921fh21fh21feh8wf8wehf8ef"
		}
		this.bookedFlightsProvider.addToBookedFlights(bookedFlight);
		this.navCtrl.push(BookSuccessPage, {bookedFlight: bookedFlight});
	}

	makeid(length): string {
		var text = "";
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	  
		for (var i = 0; i < length; i++)
			text += possible.charAt(Math.floor(Math.random() * possible.length));
	  
		return text;
	}

	getRandomCity(): string {
		return this.cities[Math.floor(Math.random() * this.cities.length)];
	}
}
