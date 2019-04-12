export let abi = [
	{
		"constant": false,
		"inputs": [],
		"name": "getVectors",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "trustedAddress",
				"type": "address"
			}
		],
		"name": "delTrusted",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "setOwner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getName",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getOwner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_vectors",
				"type": "string"
			}
		],
		"name": "setVectors",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "trustedAddress",
				"type": "address"
			},
			{
				"name": "name",
				"type": "string"
			}
		],
		"name": "addTrusted",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "owner",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	}
];

export let bytecode = "60806040526040805190810160405280600a81526020017f466c6967687450617373000000000000000000000000000000000000000000008152506000908051906020019061004f929190610168565b5034801561005c57600080fd5b50604051610c9c380380610c9c833981018060405281019080805182019291906020018051906020019092919050505081600290805190602001906100a2929190610168565b5080600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3505061020d565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106101a957805160ff19168380011785556101d7565b828001600101855582156101d7579182015b828111156101d65782518255916020019190600101906101bb565b5b5090506101e491906101e8565b5090565b61020a91905b808211156102065760008160009055506001016101ee565b5090565b90565b610a808061021c6000396000f300608060405260043610610083576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630403faa8146100885780630afbe9051461010b57806313af40351461016657806317d7de7c146101e9578063893d20e814610279578063e341a68f146102d0578063e807a54414610339575b600080fd5b6100906103da565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100d05780820151818401526020810190506100b5565b50505050905090810190601f1680156100fd5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561011757600080fd5b5061014c600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610497565b604051808215151515815260200191505060405180910390f35b34801561017257600080fd5b506101a7600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610510565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156101f557600080fd5b506101fe610558565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561023e578082015181840152602081019050610223565b50505050905090810190601f16801561026b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561028557600080fd5b5061028e61060d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102dc57600080fd5b50610337600480360381019080803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929050505061064a565b005b34801561034557600080fd5b506103c0600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929050505061067f565b604051808215151515815260200191505060405180910390f35b60606103e4610750565b15156103ef57600080fd5b61049260038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104885780601f1061045d57610100808354040283529160200191610488565b820191906000526020600020905b81548152906001019060200180831161046b57829003601f168201915b50505050506107c7565b905090565b60006104a16107d1565b15156104ac57600080fd5b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160006101000a81548160ff02191690831515021790555060019050919050565b600061051a6107d1565b151561052557600080fd5b61052e82610829565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6060610562610750565b151561056d57600080fd5b60028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106035780601f106105d857610100808354040283529160200191610603565b820191906000526020600020905b8154815290600101906020018083116105e657829003601f168201915b5050505050905090565b60006106176107d1565b151561062257600080fd5b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6106526107d1565b151561065d57600080fd5b61066681610925565b6003908051906020019061067b92919061092f565b5050565b60006106896107d1565b151561069457600080fd5b81600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000190805190602001906106ea9291906109af565b506001600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160006101000a81548160ff0219169083151502179055506001905092915050565b6000600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff16806107b157506107b06107d1565b5b156107bf57600190506107c4565b600090505b90565b6060819050919050565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561086557600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6060819050919050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061097057805160ff191683800117855561099e565b8280016001018555821561099e579182015b8281111561099d578251825591602001919060010190610982565b5b5090506109ab9190610a2f565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106109f057805160ff1916838001178555610a1e565b82800160010185558215610a1e579182015b82811115610a1d578251825591602001919060010190610a02565b5b509050610a2b9190610a2f565b5090565b610a5191905b80821115610a4d576000816000905550600101610a35565b5090565b905600a165627a7a72305820d1ac3c9013d2c97f15a67a5f31e6a6601f64ff14863321db2b33b97c5b2095700029";