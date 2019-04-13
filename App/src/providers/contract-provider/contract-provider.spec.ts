import "jasmine";
import { ContractProvider } from "./contract-provider";
import { StorageProvider } from "../storage-provider/storage-provider";

describe("ContractProvider", () => {
    let contractProvider: ContractProvider;
    let storageProvider: StorageProvider;

    beforeEach(() => {
        storageProvider = new StorageProvider();

    })
});