import "jasmine";
import { FaucetProvider } from "./faucet-provider";
import { StorageProvider } from "../storage-provider/storage-provider";

describe("FaucetProvider", () => {
    let faucetProvider: FaucetProvider;
    let storageProvider: StorageProvider;

    beforeEach(() => {
        storageProvider = new StorageProvider();

    })
});