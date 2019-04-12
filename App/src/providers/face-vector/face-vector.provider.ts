import { Injectable } from "@angular/core";
import * as faceapi from 'face-api.js';

export interface IFaceScanResult {
    confidence: number;
    vectors: {x: number, y: number}[];
}

@Injectable()
export class FaceVectorProvider {
    /**
     * Initializes the FaceVectorProvider by loading neural network models.
     */
    async initialize() {
        await faceapi.nets.ssdMobilenetv1.loadFromUri('./assets/models');
        await faceapi.nets.faceLandmark68Net.loadFromUri('./assets/models');
        await faceapi.nets.faceRecognitionNet.loadFromUri('./assets/models');

        console.log("Face vector models initialized");
    }

    /**
     * Performs a face analyses on the given input.
     * @param input 
     */
    async startFaceAnalysis(input: HTMLImageElement | HTMLVideoElement): Promise<IFaceScanResult> {
        const faceScan = await faceapi.detectSingleFace(input).withFaceLandmarks();

        const result: IFaceScanResult = {
            confidence: faceScan.detection.score,
            vectors: faceScan.landmarks.positions
        };

        return result;
    }
}