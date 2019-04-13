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

    private distanceTreshold = 0.3;

    constructor(private http: HttpClient) {}

    setEndPoint(endPoint: string) {
        this.endPoint = endPoint;
    }

    setDistanceTreshold(distanceTreshold: number) {
        this.distanceTreshold = distanceTreshold;
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
                } else if(result.identity._distance < this.distanceTreshold) {
                    // Gate knows about this identity meaning it was shared with this gate.
                    // So: it is allowed to access!
                    return true
                }
            },
            (error) => {
                return false;
            }
        );
    }
}