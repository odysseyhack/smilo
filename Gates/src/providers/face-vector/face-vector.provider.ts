import { Injectable } from "@angular/core";
import * as faceapi from 'face-api.js';

export interface IFaceScanResult {
    confidence: number;
    vectors: Float32Array;
    expressions: {expression: string, probability: number}[];
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
        await faceapi.nets.faceExpressionNet.loadFromUri('./assets/models');
    }

    /**
     * Performs a face analyses on the given input.
     * @param input 
     */
    async startFaceAnalysis(input: HTMLImageElement | HTMLVideoElement): Promise<IFaceScanResult> {
        const faceScan = await faceapi.detectSingleFace(input).withFaceExpressions().withFaceLandmarks().withFaceDescriptor();
        if(!faceScan || !faceScan.detection)
            return null;

        const result: IFaceScanResult = {
            confidence: faceScan.detection.score,
            vectors: faceScan.descriptor,
            expressions: faceScan.expressions
        };

        return result;
    }
}