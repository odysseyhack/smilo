import "jasmine";
import { WalletProvider } from "./wallet-provider";
import { MockAccountProvider } from "../../../test-config/mocks/MockAccountProvider";

describe("StorageProvider", () => {
    let walletProvider: WalletProvider;
    let accountProvider: MockAccountProvider;

    beforeEach(() => {
        accountProvider = new MockAccountProvider();

        walletProvider = new WalletProvider(null);

    })
});