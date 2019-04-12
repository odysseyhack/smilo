import { Injectable } from "@angular/core";
import { EncryptionHelper } from "../../keystore/EncryptionHelper";
import { StorageProvider } from "../storage-provider/storage-provider";
import { IKeyStore } from "@smilo-platform/smilo-commons-js-web";

const PASSWORD_CHECK_KEY = "password-check";
const MAGIC_KEY = "check-complete";

@Injectable()
export class AccountProvider {
    private password: string;
    private encryptionHelper = new EncryptionHelper();

    constructor(private storageProvider: StorageProvider) {}

    public accountExists(): boolean {
        return !!this.storageProvider.read(PASSWORD_CHECK_KEY);
    }

    public setPassword(password: string) {
        this.password = password;

        this.updatePasswordCheck();
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
            this.storageProvider.readAsJSON<IKeyStore>(PASSWORD_CHECK_KEY),
            password
        ) == MAGIC_KEY
    }

    private updatePasswordCheck() {
        this.storageProvider.writeAsJSON(
            PASSWORD_CHECK_KEY,
            this.encryptionHelper.createKeyStore(MAGIC_KEY, this.password)
        );
    }

}
