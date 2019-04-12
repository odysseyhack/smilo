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
        passport: null,
        faceVectors: null
    };

    constructor(
        private accountProvider: AccountProvider
    ) {
        this.accountProvider.onPasswordChanged().subscribe(
            () => this.restoreIdentity()
        );
    }

    /**
     * Updates the base identity properties.
     * @param fullName 
     * @param birthDate 
     * @param nationality 
     */
    public setIdentity(fullName: string, birthDate: Date, nationality: string) {
        this.identity.fullName = fullName;
        this.identity.birthDate = birthDate;
        this.identity.nationality = nationality;

        this.saveIdentity();
    }

    /**
     * Updates the passport
     * @param passport
     */
    public setPassport(passport: string) {
        this.identity.passport = passport;

        this.saveIdentity();
    }

    /**
     * Updates the face vectors
     * @param faceVectors 
     */
    public setFaceVectors(faceVectors: Float32Array) {
        this.identity.faceVectors = faceVectors;

        this.saveIdentity();
    }

    private saveIdentity() {
        this.accountProvider.encryptToStorage(IDENTITY_STORAGE_KEY, this.identity);
    }

    private restoreIdentity() {
        const restoredIdentity = this.accountProvider.decryptFromStorage<IIdentity>(IDENTITY_STORAGE_KEY);
        console.log('restoredIdentity:', restoredIdentity);

        if(restoredIdentity) {
            this.identity = restoredIdentity;
        }
    }

    public getIdentity(): IIdentity {
        return this.identity;
    }
}