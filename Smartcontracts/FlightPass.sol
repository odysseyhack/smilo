pragma solidity ^0.4.25;

library Library {
  struct data {
     string name;
     bool isValue;
   }
}

contract FlightPass {
    using Library for Library.data;
    string private contractName = "FlightPass";
    uint private revision;
    string private _name;
    bytes private vectors;
    address private _owner;
    mapping(address => Library.data) private trusted;
    
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);
    
    /**
     * Constructor parameters:
     *      string name
     *      address owner
     * Set owner to address owner
     */
    constructor(string memory name, address owner) public {
        _name = name;
        _owner = owner;
        emit OwnershipTransferred(address(0), _owner);
    }
    
    /**
     * Get a name
     * onlyTrusted
     * @return name
     */
    function getName() public onlyTrusted view returns (string memory) {
        return _name;
    }
    
    /**
     * Set the biometrics
     * onlyOwner
     */
    function setVectors(string _vectors) public onlyOwner {
        vectors = stringToBytesArray(_vectors);
    }
    
    /**
     * Share the biometrics
     * only trusted people + owner
     * @return vectors as a string
     */
    function getVectors() public payable returns (string) {
        require(isTrusted());
        return bytesArrayToString(vectors);
    }
    
    /**
     * Change ownership of contract.
     */
    function setOwner(address newOwner) public onlyOwner returns (address) {
        _transferOwnership(newOwner);
        return _owner;
    }
    
    /**
     * @return the address of the owner.
     */
    function getOwner() public onlyOwner view returns (address) {
        return _owner;
    }
    
    /**
     * Add address to trusted list
     * @return true if success
     */
    function addTrusted(address trustedAddress, string memory name) public onlyOwner returns (bool) {
        trusted[trustedAddress].name = name;
        trusted[trustedAddress].isValue = true;
        return true;
    }
    
    /**
     * Set address trustee to false
     * Todo: clean up untrusted addresses
     * @return true if success
     */
    function delTrusted(address trustedAddress) public onlyOwner returns (bool) {
        trusted[trustedAddress].isValue = false;
        return true;
    }
  
    /**
     * @return true if `msg.sender` is the owner of the contract.
     */
    function isOwner() private view returns (bool) {
        return msg.sender == _owner;
    }
  
    /**
     * @return true if `address` is a trustee of the contract.
     */
    function isTrusted() private view returns (bool) {
        if(trusted[msg.sender].isValue || isOwner()) return true;
        return false;
    }

    /**
     * @dev Throws if called by any account other than the owner.
     */
    modifier onlyOwner() {
        require(isOwner());
        _;
    }
    
    /**
     * @dev Throws if called by any account other than the owner.
     */
    modifier onlyTrusted() {
        require(isTrusted());
        _;
    }
    
    /**
     * Convert bytes to string 
     */
    function bytesArrayToString(bytes memory _bytes) private pure returns (string) {
        return string(_bytes);
    }

    /**
     * Convert string to bytes 
     */
    function stringToBytesArray(string memory str) private pure returns (bytes){
        return bytes(str);
    }

    /**
     * @dev Transfers control of the contract to a newOwner.
     * @param newOwner The address to transfer ownership to.
     */
    function _transferOwnership(address newOwner) internal {
        require(newOwner != address(0));
        emit OwnershipTransferred(_owner, newOwner);
        _owner = newOwner;
    }
}