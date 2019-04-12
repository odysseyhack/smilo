import { Injectable } from "@angular/core";
import { IIdentity } from "../../interfaces/IIdentity";
import { AccountProvider } from "../account-provider/account.provider";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FaucetProvider {
    private baseUrl = "https://testnet-faucet.smilo.network/api/request/smilo"
    
    constructor(private http: HttpClient) {

    }

    requestFunds(address: string): Promise<string> {
        return this.http.get(`${this.baseUrl}/${address}`).toPromise().then((data: string) => {
            return data;
        });
    }
}