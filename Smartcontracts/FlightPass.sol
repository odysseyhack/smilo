pragma solidity ^0.4.25;
pragma experimental ABIEncoderV2;

contract FlightPass {
    string private _contractName = "FlightPass";
    string private _ticket;
    string private _flight;
    string private _passport;
    string private _name;
    bytes private _vectors;
    address private _owner;
    mapping(address => trusted) private _trusted;
    
    struct trusted {
        address trustedAddress;
        string name;
        bool isValue;
    }
    
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);
    
    /**
     * Constructor parameters:
     *      string name
     *      address owner
     * Set owner to address owner
     */
    constructor(string memory name, address owner, string memory ticket, string memory flight, string memory passport) public {
        _name = name;
        _owner = owner;
        _ticket = ticket;
        _flight = flight;
        _passport = passport;
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
    function setVectors(string vectors) public onlyOwner {
        _vectors = stringToBytesArray(vectors);
    }
    
    /**
     * Share the biometrics
     * only trusted people + owner
     * @return vectors as a string
     */
    function getVectors() public onlyTrusted view returns (string) {
        return bytesArrayToString(_vectors);
    }
    
    /**
     * Change ownership of contract.
     */
    function setOwner(address newOwner) public onlyOwner returns (address) {
        _transferOwnership(newOwner);
        return _owner;
    }
    
    /**
     * only trusted people + owner
     * @return the flight of the owner.
     */
    function getFlight() public onlyTrusted view returns (string) {
        return _flight;
    }
    
    /**
     * only trusted people + owner
     * @return the passport of the owner.
     */
    function getPassPort() public onlyTrusted view returns (string) {
        return _passport;
    }
    
     /**
     * only trusted people + owner
     * @return the ticket of the owner.
     */
    function getTicket() public onlyTrusted view returns (string) {
        return _ticket;
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
    function addTrusted(trusted[] memory trustedlist) public onlyOwner {
        for (uint i=0; i < trustedlist.length; i++) {
            var obj = trustedlist[i];
            _trusted[obj.trustedAddress].trustedAddress = obj.trustedAddress;
            _trusted[obj.trustedAddress].name = obj.name;
            _trusted[obj.trustedAddress].isValue = obj.isValue;
        }
    }
    
    function isTrustedAddress(address trustedAddress) public onlyOwner view returns (bool) {
        if(_trusted[trustedAddress].isValue) return true;
        return false;
    }
    
    /**
     * Set address trustee to false
     * Todo: clean up untrusted addresses
     * @return true if success
     */
    function delTrusted(address trustedAddress) public onlyOwner returns (bool) {
        _trusted[trustedAddress].isValue = false;
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
        if(_trusted[msg.sender].isValue || isOwner()) return true;
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