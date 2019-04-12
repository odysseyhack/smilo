export interface IBookedFlight {
    from: string;
    to: string;
    date: Date;
    travellers: string;
    flightId: string;
    smartContractAddress: string;
    checkedIn?: boolean;
}