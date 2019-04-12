import { Injectable } from "@angular/core";
import * as Smilo from "@smilo-platform/smilo-commons-js-web";
import * as Web3 from "web3";
import { WalletProvider } from "../wallet-provider/wallet-provider";
import { abi, bytecode } from "../../smartcontracts/smartcontracts";
import { IBookedFlight } from "../../interfaces/IBookedFlight";
import { IdentityProvider } from "../identity-provider/identity.provider";
import { AccountProvider } from "../account-provider/account.provider";

const CONTRACT_ADDRESS_KEY = "contract";

@Injectable()
export class ContractProvider {
    private web3: Web3;
    private contractAddress: string;
    private sharedWith = [ 'NUK/bcNCE91Ijf9vlvbZQUrxQ9j/LZxe2eFan29nRG8=', 'aRwxWoSsaPTZa0f4RZhU6IWMyyAM20fxQgx7PXyodEM=', 'rA3MNKuWmW/Fng1NSl5p8BhBCy0psoUG9pgH/IwM+A8=', 'ITWEZCbs3DGB4l0TZ1LbIJ2tBRGpizTmVvzksTZZTE4=', 'CiGtWnwyU4MY8AO/mrTt3Gv7ajic5DdnLTVqjhX13VU=' ];

    constructor(
        private walletProvider: WalletProvider,
        private identityProvider: IdentityProvider,
        private accountProvider: AccountProvider
    ) {
        this.walletProvider.onWalletUnlocked().subscribe(
            async () => {
                await this.connectToWeb3Provider();
                await this.registerAccount();
                await this.unlockAccount();
            }
        );

        this.accountProvider.onPasswordChanged().subscribe(
            () => this.restore()
        );
    }

    connectToWeb3Provider() {
        this.web3 = new Web3("http://node1.klm.smilo.network:22000");
    }

    async registerAccount() {
        console.log("Unlcok web3 account");
        try {
            let privateKey = this.walletProvider.getPrivateKey().substring(2);
            console.log('getAccount with:', privateKey);
            let accountImport = await this.web3.eth.personal.importRawKey(
                    privateKey, 
                    privateKey
            );
            console.log(accountImport);
        } catch(e) {
            console.log("Import failed: " + e);
        }
    }

    async unlockAccount() {
        let publicKey = this.walletProvider.getPublicKey();
        let privateKey =  this.walletProvider.getPrivateKey().substring(2);
        return await this.web3.eth.personal.unlockAccount(
            publicKey, 
            privateKey, 
            20000
        );
    }

    async deployContract(bookedFlight: IBookedFlight) {
        let ticket = JSON.stringify(bookedFlight);
        let flight = bookedFlight.flightId;
        let identity = this.identityProvider.getIdentity();
        let name = identity.fullName;
        let passport = identity.passport;

        let flightpassContract = new this.web3.eth.Contract(abi);
        flightpassContract.deploy(
            {
                data: '0x' + bytecode,
                arguments: [
                    name, 
                    this.walletProvider.getPublicKey(),
                    ticket,
                    flight,
                    passport
                ]
            }
        ).send({
            from: this.walletProvider.getPublicKey(),
            gas: '4000000',
            gasPrice: '0',
            sharedWith: this.sharedWith
        }).on('error', (error) => {
            console.log(`Error deploying contract ${error}`);
        }).on('transactionHash', (transactionHash) => {
            console.log(`Successfully submitted contract creation. Transaction hash: ${transactionHash}`);
        }).on('receipt', (receipt) => {
            console.log(`Receipt after mining with contract address: ${receipt.contractAddress}`);
        }).then((newContractInstance) => {
            this.contractAddress = newContractInstance.options.address;

            this.save();
        }).catch((error) => {
            console.error(error);
        });
    }

    async setVectors() {
        let flightpassContract = new this.web3.eth.Contract(abi);
        flightpassContract.options.address = this.contractAddress;
        let vectors = "[" + this.identityProvider.getIdentity().faceVectors + "]";

        return flightpassContract.methods.setVectors(
            vectors
        ).send({
            from: this.walletProvider.getPublicKey(),
            gas: '2000000',
            gasPrice: '0',
            sharedWith: this.sharedWith
        });
    }

    async getVectors() {
        let flightpassContract = new this.web3.eth.Contract(abi);
        flightpassContract.options.address = this.contractAddress;

        return flightpassContract.methods.getVectors().call({
            from: this.walletProvider.getPublicKey()
        });
    }

    async getName() {
        let flightpassContract = new this.web3.eth.Contract(abi);
        flightpassContract.options.address = this.contractAddress;

        return flightpassContract.methods.getName().call({
            from: this.walletProvider.getPublicKey()
        });
    }

    save() {
        this.accountProvider.encryptToStorage(CONTRACT_ADDRESS_KEY, this.contractAddress);
    }

    restore() {
        this.contractAddress = this.accountProvider.decryptFromStorage(CONTRACT_ADDRESS_KEY);
    }
}