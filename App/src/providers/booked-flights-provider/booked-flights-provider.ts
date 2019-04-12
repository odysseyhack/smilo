import { Injectable } from "@angular/core";
import { IBookedFlight } from "../../interfaces/IBookedFlight";

@Injectable()
export class BookedFlightsProvider  {
    private bookedFlights: IBookedFlight[] = [];

    constructor() {

    }

    addToBookedFlights(bookedFlight: IBookedFlight) {
        this.bookedFlights.push(bookedFlight);
    }

    getBookedFlights(): IBookedFlight[] {
        return this.bookedFlights;
    }
}