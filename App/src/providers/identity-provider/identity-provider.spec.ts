import "jasmine";
import { IdentityProvider } from "./identity.provider";
import { StorageProvider } from "../storage-provider/storage-provider";

describe("IdentityProvider", () => {
    let identityProvider: IdentityProvider;
    let storageProvider: StorageProvider;

    beforeEach(() => {
        storageProvider = new StorageProvider();

    })
});