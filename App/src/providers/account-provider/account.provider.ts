import { Injectable, EventEmitter } from "@angular/core";
import { EncryptionHelper } from "../../keystore/EncryptionHelper";
import { StorageProvider } from "../storage-provider/storage-provider";
import { IKeyStore } from "@smilo-platform/smilo-commons-js-web";
import { IAccount } from "../../interfaces/IAccount";
import { Observable } from "rxjs";

const ACCOUNT_KEY = "account";

@Injectable()
export class AccountProvider {
    private password: string;
    private encryptionHelper = new EncryptionHelper();

    private account: IAccount;

    private passwordChanged: EventEmitter<void> = new EventEmitter();

    constructor(private storageProvider: StorageProvider) {
        this.onPasswordChanged().subscribe(
            () => this.restore()
        );
    }

    /**
     * Returns true if the user already created an account.
     */
    public accountExists(): boolean {
        return !!this.storageProvider.read(ACCOUNT_KEY);
    }

    /**
     * Sets the name of this account. The changes will immediately be serialized.
     * @param name 
     */
    public setName(name: string) {
        this.account = {
            name: name
        };

        this.encryptToStorage(ACCOUNT_KEY, this.account);
    }

    public getName(): string {
        return this.account.name;
    }

    /**
     * Returns an Observable which, when subscribed to, will notify the listener when the user has set the password.
     * 
     * Listeners could then respond to this by decrypting data.
     */
    public onPasswordChanged(): Observable<void> {
        return this.passwordChanged.asObservable();
    }

    /**
     * Sets the password used to unlock the account.
     * @param password
     */
    public setPassword(password: string) {
        this.password = password;

        this.passwordChanged.emit();
    }

    private restore() {
        this.account = this.decryptFromStorage(ACCOUNT_KEY);

    }

    /**
     * Encrypts the given data and stores it in local storage. The data can later be retrieved by the given key.
     */
    public encryptToStorage(key: string, data: any) {
        if(!this.password) {
            throw new Error("Please unlock account first");
        }

        this.storageProvider.writeAsJSON(
            key,
            this.encryptionHelper.createKeyStore(JSON.stringify(data), this.password)
        );
    }

    /**
     * Decrypts and returns data previously stored encrypted in local storage.
     */
    public decryptFromStorage<T>(key: string): T {
        if(!this.password) {
            throw new Error("Please unlock account first");
        }
        
        const keyStore: IKeyStore = this.storageProvider.readAsJSON<IKeyStore>(key);
        if(keyStore) {
            return <T>JSON.parse(this.encryptionHelper.decryptKeyStore(keyStore, this.password));
        } else {
            return null;
        }
    }

    /**
     * Returns true if the given password can be used to unlock this account.
     * @param password
     */
    public isCorrectPassword(password: string): boolean {
        return this.encryptionHelper.decryptKeyStore(
            this.storageProvider.readAsJSON<IKeyStore>(ACCOUNT_KEY),
            password
        ) != null;
    }
}
