var Greeter = artifacts.require("./Greeter.sol");

module.exports = function(deployer) {
  deployer.deploy(Greeter, "I am alive");
  deployer.deploy(Greeter, "I will take bids");
};