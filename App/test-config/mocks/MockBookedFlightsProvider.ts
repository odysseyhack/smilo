import { IBookedFlightsProvider } from "../../src/providers/booked-flights-provider/booked-flights-provider";
import { IBookedFlight } from "../../src/interfaces/IBookedFlight";

export class MockBookedFlightsProvider implements IBookedFlightsProvider {
    onBookedFlightChanged() {
        
    }
    setBookedFlight(bookedFlight: IBookedFlight) {
        
    }
    markBookedFlightAsCheckedIn() {
        
    }
    getBookedFlight(): IBookedFlight {
        return <IBookedFlight>{
            checkedIn: false,
            date: new Date(),
            flightId: "FLIGHT_ID",
            from: "FROM",
            to: "TO",
            smartContractAddress: "CONTRACT_ADDRESS",
            travellers: "TRAVELLERS"
        };
    }
}