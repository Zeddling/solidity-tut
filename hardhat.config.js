require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
/** @type import('hardhat/config').HardhatUserConfig */

const { API_URL,PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: API_URL,
      accounts: [PRIVATE_KEY]
    }
  }
};
