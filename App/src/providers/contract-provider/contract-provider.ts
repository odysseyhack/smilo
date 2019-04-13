import { Injectable } from "@angular/core";
import * as Smilo from "@smilo-platform/smilo-commons-js-web";
import * as Web3 from "web3";
import { WalletProvider } from "../wallet-provider/wallet-provider";
import { abi, bytecode } from "../../smartcontracts/smartcontracts";
import { IBookedFlight } from "../../interfaces/IBookedFlight";
import { IdentityProvider } from "../identity-provider/identity.provider";
import { ITrusted } from "../../interfaces/ITrusted";
import { AccountProvider } from "../account-provider/account.provider";
import { HttpClient } from "@angular/common/http";
import { BaseUrlProvider } from "../url-provider/url-provider";

const CONTRACT_ADDRESS_KEY = "contract";

@Injectable()
export class ContractProvider {
    private web3: Web3;
    private contractAddress: string;
    private initialized: boolean;
    private sharedWithDeploy = [ 
        'NUK/bcNCE91Ijf9vlvbZQUrxQ9j/LZxe2eFan29nRG8=',
        'aRwxWoSsaPTZa0f4RZhU6IWMyyAM20fxQgx7PXyodEM=',
        'rA3MNKuWmW/Fng1NSl5p8BhBCy0psoUG9pgH/IwM+A8=',
        'ITWEZCbs3DGB4l0TZ1LbIJ2tBRGpizTmVvzksTZZTE4=',
        'CiGtWnwyU4MY8AO/mrTt3Gv7ajic5DdnLTVqjhX13VU=' 
    ];

    private sharedWithUpdate = [ 
        'NUK/bcNCE91Ijf9vlvbZQUrxQ9j/LZxe2eFan29nRG8=',
        'aRwxWoSsaPTZa0f4RZhU6IWMyyAM20fxQgx7PXyodEM=',
        'rA3MNKuWmW/Fng1NSl5p8BhBCy0psoUG9pgH/IwM+A8=',
        'CiGtWnwyU4MY8AO/mrTt3Gv7ajic5DdnLTVqjhX13VU=' 
    ];

    constructor(
        private walletProvider: WalletProvider,
        private identityProvider: IdentityProvider,
        private accountProvider: AccountProvider,
        private baseUrlProvider: BaseUrlProvider,
        private http: HttpClient
    ) {
        this.walletProvider.onWalletUnlocked().subscribe(
            async () => {
                await this.connectToWeb3Provider();
                await this.registerAccount();
                await this.unlockAccount();
                this.initialized = true;
            }
        );

        this.accountProvider.onPasswordChanged().subscribe(
            () => this.restore()
        );
    }

    connectToWeb3Provider() {
        this.web3 = new Web3("https://node0.klm.smilo.network:443");
    }

    isInitialized(): boolean {
        return this.initialized;
    }

    async registerAccount() {
        try {
            let privateKey = this.walletProvider.getPrivateKey().substring(2);
            let accountImport = await this.web3.eth.personal.importRawKey(
                    privateKey, 
                    privateKey
            );
        } catch(e) {
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
        let trustedArray: ITrusted[] = [];
        trustedArray.push(<ITrusted>{name: "KLM Server", trustedAddress: "0x170ce250de1be1f83bbe5d24604538c9619bc02a", isValue: true});
        trustedArray.push(<ITrusted>{name: "Gate 1", trustedAddress: "0xd4e88d6eb5012a58be7db508136e955d86227353", isValue: true});
        trustedArray.push(<ITrusted>{name: "Gate 2", trustedAddress: "0xa984718e409cfbd2a054b411836411334bb6b625", isValue: true});
        trustedArray.push(<ITrusted>{name: "Gate 4", trustedAddress: "0x6e9c44496220948787ff74e715128a7e1258b5a5", isValue: true});

        let flightpassContract = new this.web3.eth.Contract(abi);
        return flightpassContract.deploy(
            {
                data: '0x' + bytecode,
                arguments: [
                    name, 
                    this.walletProvider.getPublicKey(),
                    ticket,
                    flight,
                    passport,
                    trustedArray
                ]
            }
        ).send({
            from: this.walletProvider.getPublicKey(),
            gas: '4000000',
            gasPrice: '0',
            sharedWith: this.sharedWithDeploy
        }).on('error', (error) => {
            console.error(`Error deploying contract ${error}`);
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
        console.log('vectors:', vectors);
        return flightpassContract.methods.setVectors(
            vectors
        ).send({
            from: this.walletProvider.getPublicKey(),
            gas: '2000000',
            gasPrice: '0',
            sharedWith: this.sharedWithUpdate
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
            sharedWith: this.sharedWithUpdate
        }, (error, result) => {
            console.error('addTrusted error:', error);
        });
    }

    deleteContract(): Promise<string[]> {
        let deleteArray = [
            this.http.delete(`${this.baseUrlProvider.getBaseUrlNode1()}/transactions/${this.contractAddress}`).toPromise().then((data: string) => { return data }),
            this.http.delete(`${this.baseUrlProvider.getBaseUrlNode2()}/transactions/${this.contractAddress}`).toPromise().then((data: string) => { return data }),
            this.http.delete(`${this.baseUrlProvider.getBaseUrlNode3()}/transactions/${this.contractAddress}`).toPromise().then((data: string) => { return data }),
            this.http.delete(`${this.baseUrlProvider.getBaseUrlNode4()}/transactions/${this.contractAddress}`).toPromise().then((data: string) => { return data }),
            this.http.delete(`${this.baseUrlProvider.getBaseUrlNode5()}/transactions/${this.contractAddress}`).toPromise().then((data: string) => { return data })
        ];
        return Promise.all(deleteArray);
    }

    // async allowAllGates() {
    //     let trustedArray: ITrusted[] = [];
    //     trustedArray.push(<ITrusted>{name: "KLM Server", trustedAddress: "0x170ce250de1be1f83bbe5d24604538c9619bc02a", isValue: true});
    //     trustedArray.push(<ITrusted>{name: "Gate 1", trustedAddress: "0xd4e88d6eb5012a58be7db508136e955d86227353", isValue: true});
    //     trustedArray.push(<ITrusted>{name: "Gate 2", trustedAddress: "0xa984718e409cfbd2a054b411836411334bb6b625", isValue: true});
    //     trustedArray.push(<ITrusted>{name: "Gate 4", trustedAddress: "0x6e9c44496220948787ff74e715128a7e1258b5a5", isValue: true});
    //     await this.addTrusted(trustedArray);
    // }

    save() {
        this.accountProvider.encryptToStorage(CONTRACT_ADDRESS_KEY, this.contractAddress);
    }

    restore() {
        this.contractAddress = this.accountProvider.decryptFromStorage(CONTRACT_ADDRESS_KEY);
    }
}