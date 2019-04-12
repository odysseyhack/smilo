import { Injectable } from "@angular/core";
import * as Smilo from "@smilo-platform/smilo-commons-js-web";
import Web3Eth from "@smilo-platform/web3-eth-accounts";
import { AccountProvider } from "../account-provider/account.provider";

export const KEY_STORE_STORAGE_KEY = "wallet";

export interface IWalletProvider {
    createNew(): void;

    getPublicKey(): string;

    getPrivateKey(): string;
}

@Injectable()
export class WalletProvider implements IWalletProvider {
    private publicKey: string;
    private privateKey: string;
    private web3Eth: Web3Eth;

    constructor(private accountProvider: AccountProvider) {
        this.web3Eth = new Web3Eth();

        this.accountProvider.onPasswordChanged().subscribe(
            () => this.restoreWallet()
        );
    }

    /**
     * Creates a new wallet.
     */
    createNew(): void {
        this.generateNew();
        this.save();
    }

    private restoreWallet(): void {
        this.privateKey = this.accountProvider.decryptFromStorage(KEY_STORE_STORAGE_KEY);
        // this.privateKey = "0000000000000000000000000000000000000000000000000073656372657430";
        if(this.privateKey) {
            let account = this.web3Eth.privateKeyToAccount(this.privateKey);
            this.publicKey = account.address;
        }
    }

    private generateNew() {
        let account = this.web3Eth.create();
        this.publicKey = account.address;
        this.privateKey = account.privateKey;
        // this.privateKey = "0000000000000000000000000000000000000000000000000073656372657430";
    }

    private save(): void {
        this.accountProvider.encryptToStorage(KEY_STORE_STORAGE_KEY, this.privateKey);
    }

    getPublicKey(): string {
        return this.publicKey;
    }

    getPrivateKey(): string {
        return this.privateKey;
    }
}