import { Injectable } from "@angular/core";


@Injectable()
export class BaseUrlProvider {
    private baseUrlNode1: string;
    private baseUrlNode2: string;
    private baseUrlNode3: string;
    private baseUrlNode4: string;
    private baseUrlNode5: string;

    constructor() {
        this.baseUrlNode1 = "https://node0.klm.smilo.network:444";
        this.baseUrlNode2 = "https://node1.klm.smilo.network:444";
        this.baseUrlNode3 = "https://node2.klm.smilo.network:444";
        this.baseUrlNode4 = "https://node3.klm.smilo.network:444";
        this.baseUrlNode5 = "https://node4.klm.smilo.network:444";
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