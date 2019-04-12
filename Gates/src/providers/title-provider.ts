import { Injectable } from "@angular/core";

@Injectable()
export class TitleProvider {
    private title: string;

    constructor() {

    }

    setTitle(title: string): void {
        this.title = title;
    }

    getTitle(): string {
        return this.title;
    }
}