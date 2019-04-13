import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookSuccessPage } from '../book-success/book-success';
import { BookedFlightsProvider } from '../../providers/booked-flights-provider/booked-flights-provider';
import { IBookedFlight } from '../../interfaces/IBookedFlight';
import { ContractProvider } from '../../providers/contract-provider/contract-provider';

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
				private bookedFlightsProvider: BookedFlightsProvider,
				private contractProvider: ContractProvider) {
		this.initialize();
	}

	async initialize() {
		this.setToAndFromCity();
		this.setDate();
		this.setTravelers();
	}

	setToAndFromCity() {
		this.from = this.getRandomCity();
		let toRandomCity = this.getRandomCity();
		while (toRandomCity === this.from) {
			toRandomCity = this.getRandomCity();
		}
		this.to = toRandomCity;
	}

	setDate() {
		this.date = new Date();
		let randomAddDays = Math.floor(Math.random() * 50) + 1;
		this.date.setDate(this.date.getDate() + randomAddDays);
	}

	setTravelers() {
		let randomNumber = Math.floor(Math.random() * 10) + 1;
		let adultText = randomNumber == 1 ? " Adult" : " Adults";
		this.travellers = randomNumber + adultText;
	}

	ionViewDidLoad() {

	}

	processBookFlight(): void {
		let randomNumber = Math.floor(Math.random() * 9999) + 1;
		let bookedFlight = <IBookedFlight>{
			from: this.from,
			to: this.to,
			date: this.date,
			travellers: this.travellers,
			flightId: "KL " + randomNumber,
			smartContractAddress: "0x28r1289hd921fh21fh21feh8wf8wehf8ef"
		}
		this.contractProvider.deployContract(bookedFlight);
		this.bookedFlightsProvider.setBookedFlight(bookedFlight);
		this.navCtrl.push(BookSuccessPage, {bookedFlight: bookedFlight});
	}

	getRandomCity(): string {
		return this.cities[Math.floor(Math.random() * this.cities.length)];
	}
}
