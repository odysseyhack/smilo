import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { IBookedFlight } from '../../interfaces/IBookedFlight';
import { BookedFlightsProvider } from '../../providers/booked-flights-provider/booked-flights-provider';

@IonicPage()
@Component({
  selector: 'page-travel',
  templateUrl: 'travel.html',
})
export class TravelPage {
	bookedFlight: IBookedFlight;
	elementType: 'url' | 'canvas' | 'img' = 'url';
	qrCodeText: string;

	constructor(private navCtrl: NavController,
				private viewController: ViewController, 
				private navParams: NavParams,
				private bookedFlightProvider: BookedFlightsProvider) {
		this.bookedFlight = this.navParams.get("bookedFlight");
		this.qrCodeText = this.bookedFlight.smartContractAddress;
	}

	ionViewDidLoad() {

	}

	goBack(): void {
		this.viewController.dismiss();
	}

}
