import { Component, ElementRef, Input, EventEmitter, Output } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IBookedFlight } from '../../interfaces/IBookedFlight';
import { BookedFlightsProvider } from '../../providers/booked-flights-provider/booked-flights-provider';
import { TravelPage } from '../../pages/travel/travel';
import { ContractProvider } from '../../providers/contract-provider/contract-provider';
import { StorageProvider } from '../../providers/storage-provider/storage-provider';
import { HomePage } from '../../pages/home/home';

@Component({
    selector: 'components-menu-bar',
    templateUrl: 'components-menu-bar.html'
})
export class ComponentsMenuBarComponent {
    bookedFlight: IBookedFlight;
    isDeleting: boolean;

    @Output() 
    shownChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    @Input()
    set shown(value: boolean) {
        if(value)
            this.element.nativeElement.className = "shown";
        else
            this.element.nativeElement.className = "";

        this.shownChange.next(value);
    }

    constructor(private element: ElementRef,
                private navController: NavController,
                private contractProvider: ContractProvider,
                private storageProvider: StorageProvider,
				private bookedFlightsProvider: BookedFlightsProvider) {
        this.bookedFlight = this.bookedFlightsProvider.getBookedFlight();
    }

    goToTravelPage(bookedFlight: IBookedFlight): void {
		this.navController.push(TravelPage, {bookedFlight: bookedFlight});
    }
    
    deleteSmartContract() {
        this.isDeleting = true;
		this.contractProvider.deleteContract().then(data => {
            this.clearWholeLocalStorage();
		}).catch(error => {
			console.log('Delete failed:', error);
		});
    }
    
    clearWholeLocalStorage() {
        this.storageProvider.deleteEverything();
        this.navController.setRoot(HomePage);
        this.isDeleting = false;
    }
}
