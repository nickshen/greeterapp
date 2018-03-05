import Web3 from 'web3';

 
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
web3.eth.defaultAccount = web3.eth.accounts[0]
 
var greeterABI = [
	{
		"type":"function",
		"name":"getGreeting",
		"constant":true,
		"inputs":[],
		"outputs":[{"name":"","type":"string"}],
		"payable":false,
		"type":"function",
	},
	{
		"type":"function",
		"name":"setGreeting",
		"inputs":[{"_greeting": "", "type":"string"}],
		"outputs":[],
		"payable":false,
		"type":"function",
	},
	{
		"type":"function",
		"name":"getPromoted",
		"constant":true,
		"inputs":[],
		"outputs":[{"name":"","type":"string"}],
		"payable":false,
		"type":"function",
	},
	{
		"type":"function",
		"name":"setPromoted",
		"inputs":[{"_promotion": "", "type":"string"}],
		"outputs":[],
		"payable":true,
		"type":"function",
	},
	{
		"type":"uint248",
		"name":"bidPrice",
	},
];

 //0xb15386999b1bd6a0449be16d1ddda2c0db60f46c
var greeterAddress = "0xb36dc5414c16ae1c593ec7cc2433eeaa3cdde5f9";
const greeterContract = web3.eth.contract(greeterABI).at(greeterAddress);
const user = web3.eth.defaultAccount;
var balance = web3.eth.getBalance(user);

//security risk probably?
var eth = web3.eth;

export {greeterAddress, greeterContract, user, balance, eth, web3};