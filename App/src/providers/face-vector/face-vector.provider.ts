import { Injectable } from "@angular/core";
import * as faceapi from 'face-api.js';

export interface IFaceScanResult {
    confidence: number;
    vectors: Float32Array;
}

@Injectable()
export class FaceVectorProvider {
    /**
     * Initializes the FaceVectorProvider by loading neural network models.
     */
    async initialize() {
        return Promise.all([
            faceapi.nets.ssdMobilenetv1.loadFromUri('./assets/models'),
            faceapi.nets.faceLandmark68Net.loadFromUri('./assets/models'),
            faceapi.nets.faceRecognitionNet.loadFromUri('./assets/models')
        ]);
    }

    /**
     * Performs a face analyses on the given input.
     * @param input 
     */
    async startFaceAnalysis(input: HTMLImageElement | HTMLVideoElement): Promise<IFaceScanResult> {
        const faceScan = await faceapi.detectSingleFace(input).withFaceLandmarks().withFaceDescriptor();
        if(!faceScan || !faceScan.detection)
            return null;

        const result: IFaceScanResult = {
            confidence: faceScan.detection.score,
            vectors: faceScan.descriptor
        };

        return result;
    }
}