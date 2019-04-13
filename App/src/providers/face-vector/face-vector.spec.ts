import "jasmine";
import { FaceVectorProvider } from "./face-vector.provider";
import { StorageProvider } from "../storage-provider/storage-provider";

describe("FaceVectorProvider", () => {
    let faceVectorProvider: FaceVectorProvider;
    let storageProvider: StorageProvider;

    beforeEach(() => {
        storageProvider = new StorageProvider();

    })
});