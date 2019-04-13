import "jasmine";
import { BookedFlightsProvider } from "./booked-flights-provider";
import { StorageProvider } from "../storage-provider/storage-provider";

describe("BookedFlightsProvider", () => {
    let bookedFlightsProvider: BookedFlightsProvider;
    let storageProvider: StorageProvider;

    beforeEach(() => {
        storageProvider = new StorageProvider();

    })
});