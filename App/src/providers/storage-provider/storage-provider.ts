import { Injectable } from "@angular/core";

export interface IStorageProvider {
    write(key: string, data: string);

    read(key: string): string;

    remove(key: string);

    writeAsJSON(key: string, data: any);

    readAsJSON<T>(key: string): T;
}

@Injectable()
export class StorageProvider implements IStorageProvider {
    write(key: string, data: string) {
        localStorage.setItem(key, data);
    }

    read(key: string): string {
        return localStorage.getItem(key);
    }

    remove(key: string) {
        localStorage.removeItem(key);
    }

    writeAsJSON(key: string, data: any) {
        this.write(key, JSON.stringify(data));
    }

    readAsJSON<T>(key: string): T {
        return JSON.parse(this.read(key));
    }
}