import { Injectable } from "@angular/core";

@Injectable()
export class AuthProvider {
    async isAllowed(faceVectors: Float32Array) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(false);
            }, 2000);
        })
    }
}