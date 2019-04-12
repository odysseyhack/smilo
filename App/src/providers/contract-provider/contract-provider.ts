import { Injectable } from "@angular/core";
import * as Smilo from "@smilo-platform/smilo-commons-js-web";
import * as Web3 from "web3";
import { WalletProvider } from "../wallet-provider/wallet-provider";
import { abi, bytecode } from "../../smartcontracts/smartcontracts";
import { IBookedFlight } from "../../interfaces/IBookedFlight";
import { IdentityProvider } from "../identity-provider/identity.provider";
import { ITrusted } from "../../interfaces/ITrusted";

@Injectable()
export class ContractProvider {
    private web3: Web3;
    private contractAddress: string;
    private sharedWith = [ 'NUK/bcNCE91Ijf9vlvbZQUrxQ9j/LZxe2eFan29nRG8=', 'aRwxWoSsaPTZa0f4RZhU6IWMyyAM20fxQgx7PXyodEM=', 'rA3MNKuWmW/Fng1NSl5p8BhBCy0psoUG9pgH/IwM+A8=', 'ITWEZCbs3DGB4l0TZ1LbIJ2tBRGpizTmVvzksTZZTE4=', 'CiGtWnwyU4MY8AO/mrTt3Gv7ajic5DdnLTVqjhX13VU=' ];

    constructor(private walletProvider: WalletProvider,
                private identityProvider: IdentityProvider) {
        
    }

    connectToWeb3Provider() {
        this.web3 = new Web3("http://node1.klm.smilo.network:22000");
        console.log(this.web3);
    }

    async registerAccount() {
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
        console.log('unlockAccount - publicKey', publicKey);
        console.log('unlockAccount - privateKey', privateKey);
        let unlock = await this.web3.eth.personal.unlockAccount(
            publicKey, 
            privateKey, 
            20000
        );
        console.log("Unlocked account: " + unlock + " on " + this.walletProvider.getPublicKey());
    }

    async deployContract(bookedFlight: IBookedFlight) {
        let ticket = JSON.stringify(bookedFlight);
        let flight = bookedFlight.flightId;
        let identity = this.identityProvider.getIdentity();
        let name = identity.fullName;
        let passport = identity.passport;
        if (!passport)
            passport = "passport-test";
        let vectors = "";
        let checkedIn = false;

        let flightpassContract = new this.web3.eth.Contract(abi);
        let deployment = flightpassContract.deploy(
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
            console.log(' this.contractAddress:', this.contractAddress);
        }).catch((error) => {
            console.log(error);
        });
        
    }

    async setVectors() {
        let flightpassContract = new this.web3.eth.Contract(abi);
        flightpassContract.options.address = this.contractAddress;
        let vectors = "[" + this.identityProvider.getIdentity().faceVectors + "]";
        console.log('vectors:', vectors);
        console.log('priv:', this.walletProvider.getPrivateKey());
        await flightpassContract.methods.setVectors(
            vectors
        ).send({
            from: this.walletProvider.getPublicKey(),
            gas: '2000000',
            gasPrice: '0',
            sharedWith: this.sharedWith
        }, (error, result) => {
            console.log('setVectors error:', error);
            console.log('setVectors result:', result);
            this.getVectors();
            this.getName();
        });
    }

    getVectors() {
        let flightpassContract = new this.web3.eth.Contract(abi);
        flightpassContract.options.address = this.contractAddress;
        flightpassContract.methods.getVectors().call({
            from: this.walletProvider.getPublicKey()
        }).then((vectors) => {
            console.log('Vectors:', vectors);
        });
    }

    getName() {
        let flightpassContract = new this.web3.eth.Contract(abi);
        flightpassContract.options.address = this.contractAddress;
        flightpassContract.methods.getName().call({
            from: this.walletProvider.getPublicKey()
        }).then((name) => {
            console.log('Name:', name);
        });
    }

    getSmartContract(): string {
        return this.contractAddress;
    }

    async addTrusted(trustedList: ITrusted[]) {
        let flightpassContract = new this.web3.eth.Contract(abi);
        flightpassContract.options.address = this.contractAddress;
        await flightpassContract.methods.addTrusted(
            trustedList
        ).send({
            from: this.walletProvider.getPublicKey(),
            gas: '2000000',
            gasPrice: '0',
            sharedWith: this.sharedWith
        }, (error, result) => {
            console.log('addTrusted error:', error);
            console.log('addTrusted result:', result);
        });
    }
}