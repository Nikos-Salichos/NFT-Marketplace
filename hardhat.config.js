require("@nomiclabs/hardhat-waffle");

const { PROJECT_ID } = process.env; //env file MUST be in the root folder (same as package-json)

console.log(PROJECT_ID);

module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 1337 //standard config for local configuration
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${PROJECT_ID}`,
      accounts: []
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${PROJECT_ID}`,
      accounts: []
    }
  },
  solidity: {
    verion: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
};
