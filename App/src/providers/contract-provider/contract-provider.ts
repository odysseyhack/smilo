import { Injectable } from "@angular/core";
import * as Smilo from "@smilo-platform/smilo-commons-js-web";
import * as Web3 from "web3";
import { WalletProvider } from "../wallet-provider/wallet-provider";
import { abi, bytecode } from "../../smartcontracts/smartcontracts";
import { IBookedFlight } from "../../interfaces/IBookedFlight";

@Injectable()
export class ContractProvider {
    private web3: Web3;
    private contractName: "TravelPass";
    private sharedWith = [ 'NUK/bcNCE91Ijf9vlvbZQUrxQ9j/LZxe2eFan29nRG8=', 'aRwxWoSsaPTZa0f4RZhU6IWMyyAM20fxQgx7PXyodEM=', 'rA3MNKuWmW/Fng1NSl5p8BhBCy0psoUG9pgH/IwM+A8=', 'ITWEZCbs3DGB4l0TZ1LbIJ2tBRGpizTmVvzksTZZTE4=', 'CiGtWnwyU4MY8AO/mrTt3Gv7ajic5DdnLTVqjhX13VU=' ];

    constructor(private walletProvider: WalletProvider) {
        
    }

    connectToWeb3Provider() {
        this.web3 = new Web3("http://node1.klm.smilo.network:22000");
        console.log(this.web3);
    }

    async registerAccount() {
        try {
            let privateKey = this.walletProvider.getDecryptedPrivateKey().substring(2);
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
        let privateKey =  this.walletProvider.getDecryptedPrivateKey().substring(2);
        console.log('unlockAccount - publicKey', publicKey);
        console.log('unlockAccount - privateKey', privateKey);
        let unlock = await this.web3.eth.personal.unlockAccount(
            publicKey, 
            privateKey, 
            200
        );
        console.log("Unlocked account: " + unlock + " on " + this.walletProvider.getPublicKey());
    }

    async deployContract(bookedFlight: IBookedFlight) {
        let ticket = bookedFlight;
        let flight = bookedFlight.flightId;
        let name = "";
        let passport = "";
        let vectors = "";
        let checkedIn = false;

        let flightpassContract = new this.web3.eth.Contract(abi);
        let contractAddress = "";
        let deployment = await flightpassContract.deploy(
            {
                data: '0x' + bytecode,
                arguments: [
                    this.contractName, 
                    this.walletProvider.getPublicKey()
                ]
            }
        ).send(
            {
                from: this.walletProvider.getPublicKey(),
                gas: '1000000',
                gasPrice: '0',
                sharedWith: this.sharedWith
            }).on('error', (error) => {
            console.log(`Error deploying contract ${error}`);
        }).on('transactionHash', (transactionHash) => {
            console.log(`Successfully submitted contract creation. Transaction hash: ${transactionHash}`);
        }).on('receipt', (receipt) => {
            console.log(`Receipt after mining with contract address: ${receipt.contractAddress}`);
        }).then((newContractInstance) => {
            contractAddress = newContractInstance.options.address;
            console.log("Deployed at address", contractAddress);
        }).catch((error) => {
            console.log(error);
        });
        flightpassContract.options.address = contractAddress;
    }
}