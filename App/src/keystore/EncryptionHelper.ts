import * as forge from "node-forge";
import { IKeyStore } from "./IKeyStore";

/**
 * This number is important! This defines the amount of hashing iterations
 * applied to the encryption key. Too low and all encrypted data stored
 * locally is at risk of being hacked. Too high and generating a key can take
 * a long time. Note that in the current implementation this would 'lock' the browser
 * negatively impacting user experience. 
 * 
 * Better way to do this: rewrite the 'createKeyStore' function to work async.
 * Next we generate the encryption key on a worker thread and bump the iteration
 * count to something like 20000 :D
 */
export const KEY_NUM_ITERATIONS = 10000;
export const KEY_SIZE = 32;
export const CIPHER_ALGO = "AES-CTR";

export class EncryptionHelper {
    /**
     * Creates a new key store for the given private key and password.
     * @param data The data to encrypt in this keystore
     * @param password The password to use for encryption
     */
    createKeyStore(data: string, password: string): IKeyStore {
        // Generate encryption key
        let salt = this.getSalt();
        let key = this.generateKey(password, salt);

        // Initialise cipher
        let iv = this.getInitialisationVector();
        let cipher = forge.cipher.createCipher(CIPHER_ALGO, key);
        cipher.start({iv: iv});

        // Encrypt private key
        cipher.update(forge.util.createBuffer(data, "utf8"));
        cipher.finish();
        let cipherText = cipher.output.getBytes();

        return {
            cipher: CIPHER_ALGO,
            cipherParams: {
                iv: iv
            },
            cipherText: cipherText,
            keyParams: {
                salt: salt,
                iterations: KEY_NUM_ITERATIONS,
                keySize: KEY_SIZE
            },
            controlHash: this.getControlHash(password, cipherText)
        }
    }

    /**
     * Decrypts the encrypted cipher text of the given key store using the given password.
     * 
     * A null value is returned if the key store could not be decrypted.
     * @param keyStore 
     * @param password 
     */
    decryptKeyStore(keyStore: IKeyStore, password: string): string {
        // Check if the password is valid
        let passwordControlHash = this.getControlHash(password, keyStore.cipherText);
        if(keyStore.controlHash != passwordControlHash) {
            // Control hashes do not match. This means the password is invalid.
            return null;
        }

        // Recreate the encryption key
        let key = this.generateKey(
            password, 
            keyStore.keyParams.salt, 
            keyStore.keyParams.iterations, 
            keyStore.keyParams.keySize
        );

        let decipher = forge.cipher.createDecipher(keyStore.cipher, key);
        decipher.start({iv: keyStore.cipherParams.iv});

        decipher.update(forge.util.createBuffer(keyStore.cipherText));
        if (decipher.finish()) {
            return decipher.output.toString("utf8");
        } else {
            // Failed to decrypt
            return null;
        }
    }

    /**
     * Creates a control hash by combining the password and cipher text.
     * 
     * The control hash can be used to quickly determine if the correct password is being used.
     * @param password 
     * @param cipherText 
     */
    getControlHash(password: string, cipherText: string): string {
        let md = forge.md.sha256.create();

        md.update(password + cipherText);

        return md.digest().toHex();
    }

    getInitialisationVector(): string {
        return forge.random.getBytesSync(32);
    }

    getSalt(): string {
        return forge.random.getBytesSync(256);
    }

    generateKey(password: string, salt: string, iterations?: number, size?: number): string {
        let key = forge.pkcs5.pbkdf2(password, salt, iterations || KEY_NUM_ITERATIONS, size || KEY_SIZE);

        return key;
    }
}
