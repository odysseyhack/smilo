import { Component, ElementRef, Input, EventEmitter, Output } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { IBookedFlight } from '../../interfaces/IBookedFlight';
import { BookedFlightsProvider } from '../../providers/booked-flights-provider/booked-flights-provider';

@Component({
    selector: 'components-back-button',
    templateUrl: 'components-back-button.html'
})
export class ComponentsBackButtonComponent {

    constructor(private viewController: ViewController) {

    }

    goBack(): void {
        this.viewController.dismiss();
    }
}
