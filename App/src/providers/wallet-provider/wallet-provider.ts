import { Injectable } from "@angular/core";
import * as Smilo from "@smilo-platform/smilo-commons-js-web";
import { StorageProvider } from "../storage-provider/storage-provider";
import Web3Eth from "@smilo-platform/web3-eth-accounts";
import { EncryptionHelper } from "../../keystore/EncryptionHelper";

export const KEY_STORE_STORAGE_KEY = "keystore";

export interface IWalletProvider {
    createNewKeystore(password: string): void;

    unlockKeystore(password: string): void;

    reset(): void;

    generateNewKeyStore(password: string): Smilo.IKeyStore;

    saveKeystore(): void;

    getPublicKey(): string;

    getPrivateKey(password: string): string;
}

@Injectable()
export class WalletProvider implements IWalletProvider {
    private publicKey: string;
    private privateKey: string;
    private encryptionHelper: EncryptionHelper;
    private keyStore: Smilo.IKeyStore
    private web3Eth: Web3Eth;

    constructor(private storageProvider: StorageProvider) {
        this.encryptionHelper = new EncryptionHelper();
        this.web3Eth = new Web3Eth();
        this.keyStore = this.storageProvider.readAsJSON(KEY_STORE_STORAGE_KEY);
    }

    keystoreExists(): boolean {
        return !!this.keyStore;
    }

    createNewKeystore(password: string): void {
        this.keyStore = this.generateNewKeyStore(password);
        this.privateKey = this.encryptionHelper.decryptKeyStore(this.keyStore, password);
        this.saveKeystore();
    
    }

    unlockKeystore(password: string): void {
        console.log('Unlock:', password);
        let account = this.web3Eth.privateKeyToAccount(this.getPrivateKey(password));
        this.publicKey = account.address;
    }

    reset(): void {
        this.publicKey = "";
        this.privateKey = "";
        this.keyStore = null;
        this.storageProvider.remove(KEY_STORE_STORAGE_KEY);
    }

    generateNewKeyStore(password: string): Smilo.IKeyStore {
        let account = this.web3Eth.create();
        this.publicKey = account.address;
        return this.encryptionHelper.createKeyStore(account.privateKey, password);
    }

    saveKeystore(): void {
        this.storageProvider.write(KEY_STORE_STORAGE_KEY, JSON.stringify(this.keyStore));
    }

    getPublicKey(): string {
        return this.publicKey;
    }

    getPrivateKey(password: string): string {
        let privateKey = this.encryptionHelper.decryptKeyStore(this.keyStore, password);
        this.privateKey = privateKey;
        return privateKey;
    }

    getDecryptedPrivateKey(): string {
        return this.privateKey;
    }
}