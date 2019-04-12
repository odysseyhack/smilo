export interface IKeyStore {
    /**
     * The encryption algorithm used, right now we only support aes-256-ctr
     */
    cipher: "AES-CTR",
    /**
     * Encryption algorithm parameters
     */
    cipherParams: {
        /**
         * The initialisation vector
         */
        iv: string;
    };
    /**
     * The encrypted private key
     */
    cipherText: string;
    /**
     * Parameters applied to the key
     */
    keyParams: {
        /**
         * Password salt
         */
        salt: string;
        /**
         * Amount of iterations used
         */
        iterations: number;
        /**
         * Key size in bytes
         */
        keySize: number;
    };
    /**
     * A hash which can be used to detect if a given password is correct.
     * 
     * Effectively this is a SHA256 hash of the password+cipherText
     */
    controlHash: string;
}