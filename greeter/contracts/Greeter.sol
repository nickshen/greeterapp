pragma solidity ^0.4.18;

contract Greeter {
    string greeting;
    string promotion;
    uint248 public bidPrice;

    function Greeter(string _greeting) public {
        greeting = _greeting;
        promotion = "";
        bidPrice = 500;
	}

    function setGreeting(string _greeting) public {
        greeting = _greeting;
	}

    function getGreeting() public constant returns (string) {
        return greeting;
	}

    function setPromoted(string _promotion) public payable {
        if(msg.value > bidPrice) {
            promotion = _promotion;
            bidPrice = uint248(msg.value);
        }
    }

    function getPromoted() public constant returns (string) {
        return promotion;
    }
}