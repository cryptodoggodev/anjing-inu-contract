const Token = artifacts.require('AnjingInu');

module.exports = async function (deployer, network, accounts) {
  // Deploy MyToken
  await deployer.deploy(Token);
  const myToken = await Token.deployed();
};
