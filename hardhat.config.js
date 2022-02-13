require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

<<<<<<< HEAD
const projectId = process.env.projectId;
const privateKey = process.env.privateKey;

const projectId = ''
const privateKey = ''
>>>>>>> 53e08172121b925901ae95b7f5e90909ea961eb8

module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 1337 //standard config for local configuration
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
};
