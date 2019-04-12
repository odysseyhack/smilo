import { Injectable, EventEmitter } from "@angular/core";
import { IBookedFlight } from "../../interfaces/IBookedFlight";
import { AccountProvider } from "../account-provider/account.provider";
import { ReplaySubject } from "rxjs";

const BOOKINGS_KEY = "bookings";

@Injectable()
export class BookedFlightsProvider  {
    private bookedFlight: IBookedFlight;

    private bookedFlightChange: ReplaySubject<IBookedFlight> = new ReplaySubject();

    constructor(
        private accountProvider: AccountProvider
    ) {
        this.accountProvider.onPasswordChanged().subscribe(
            () => this.restore()
        );
    }

    onBookedFlightChanged() {
        return this.bookedFlightChange.asObservable();
    }

    setBookedFlight(bookedFlight: IBookedFlight) {
        this.bookedFlight = bookedFlight;

        this.bookedFlightChange.next(bookedFlight);

        this.save();
    }

    markBookedFlightAsCheckedIn() {
        this.bookedFlight.checkedIn = true;

        this.save();
    }

    getBookedFlight(): IBookedFlight {
        return this.bookedFlight;
    }

    private restore() {
        this.setBookedFlight(this.accountProvider.decryptFromStorage(BOOKINGS_KEY));
    }

    private save() {
        this.accountProvider.encryptToStorage(BOOKINGS_KEY, this.bookedFlight);
    }
}