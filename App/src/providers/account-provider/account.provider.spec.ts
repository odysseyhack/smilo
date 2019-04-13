import "jasmine";
import { AccountProvider } from "./account.provider";
import { StorageProvider } from "../storage-provider/storage-provider";

describe("AccountProvider", () => {
    let accountProvider: AccountProvider;
    let storageProvider: StorageProvider;

    beforeEach(() => {
        storageProvider = new StorageProvider();

        accountProvider = new AccountProvider(storageProvider)
    })
});
