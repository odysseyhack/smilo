import { Injectable } from "@angular/core";
import { IIdentity } from "../../interfaces/IIdentity";
import { AccountProvider } from "../account-provider/account.provider";

const IDENTITY_STORAGE_KEY = "identity";

@Injectable()
export class IdentityProvider {
    private identity: IIdentity = {
        fullName: null,
        birthDate: null,
        nationality: null,
        passport: null
    };

    constructor(
        private accountProvider: AccountProvider
    ) {}

    public setIdentity(fullName: string, birthDate: Date, nationality: string) {
        this.identity.fullName = fullName;
        this.identity.birthDate = birthDate;
        this.identity.nationality = nationality;

        this.saveIdentity();
    }

    public setPassport(passport: string) {
        this.identity.passport = passport;

        this.saveIdentity();
    }

    private saveIdentity() {
        this.accountProvider.encryptToStorage(IDENTITY_STORAGE_KEY, this.identity);
    }

    public restoreIdentity() {
        const restoredIdentity = this.accountProvider.decryptFromStorage<IIdentity>(IDENTITY_STORAGE_KEY);

        if(restoredIdentity) {
            this.identity = restoredIdentity;
        }
    }
}