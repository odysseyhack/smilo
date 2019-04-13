import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

interface IBiometricsResult {
    identity: {
        _distance: number;
        _label: string
    }
}

@Injectable()
export class AuthProvider {
    private endPoint: string;

    constructor(private http: HttpClient) {}

    setEndPoint(endPoint: string) {
        this.endPoint = endPoint;
    }

    async isAllowed(faceVectors: Float32Array) {
        return this.http.post(
            `http://${ this.endPoint }/identities/biometrics`,
            {
                biometrics: Array.prototype.slice.call(faceVectors)
            }
        ).toPromise().then(
            (result: IBiometricsResult) => {
                if(result.identity._label == "unknown") {
                    return false;
                } else {
                    // Gate knows about this identity meaning it was shared with this gate.
                    // So: it is allowed to access!
                    return true
                }
            }
        );
    }
}