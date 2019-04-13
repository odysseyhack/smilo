import { Injectable } from "@angular/core";


@Injectable()
export class BaseUrlProvider {
    private baseUrlNode1: string;
    private baseUrlNode2: string;
    private baseUrlNode3: string;
    private baseUrlNode4: string;
    private baseUrlNode5: string;

    constructor() {
        this.baseUrlNode1 = "http://node1.klm.smilo.network:3000";
        this.baseUrlNode2 = "http://node2.klm.smilo.network:3000";
        this.baseUrlNode3 = "http://node3.klm.smilo.network:3000";
        this.baseUrlNode4 = "http://node4.klm.smilo.network:3000";
        this.baseUrlNode5 = "http://node5.klm.smilo.network:3000";
    }

    getBaseUrlNode1(): string {
        return this.baseUrlNode1;
    }

    getBaseUrlNode2(): string {
        return this.baseUrlNode2;
    }

    getBaseUrlNode3(): string {
        return this.baseUrlNode3;
    }

    getBaseUrlNode4(): string {
        return this.baseUrlNode4;
    }

    getBaseUrlNode5(): string {
        return this.baseUrlNode5;
    }
}