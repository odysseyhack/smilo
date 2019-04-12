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

    public accountExists(): boolean {
        return !!this.storageProvider.read(ACCOUNT_KEY);
    }

    public setName(name: string) {
        this.account = {
            name: name
        };

        this.encryptToStorage(ACCOUNT_KEY, this.account);
    }

    public getName(): string {
        return this.account.name;
    }

    public onPasswordChanged(): Observable<void> {
        return this.passwordChanged.asObservable();
    }

    public setPassword(password: string) {
        this.password = password;

        this.passwordChanged.emit();
    }

    private restore() {
        console.log('account restore()');
        this.account = this.decryptFromStorage(ACCOUNT_KEY);

    }

    public encryptToStorage(key: string, data: any) {
        if(!this.password) {
            throw new Error("Please unlock account first");
        }

        this.storageProvider.writeAsJSON(
            key,
            this.encryptionHelper.createKeyStore(JSON.stringify(data), this.password)
        );
    }

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

    public isCorrectPassword(password: string): boolean {
        return this.encryptionHelper.decryptKeyStore(
            this.storageProvider.readAsJSON<IKeyStore>(ACCOUNT_KEY),
            password
        ) != null;
    }
}
