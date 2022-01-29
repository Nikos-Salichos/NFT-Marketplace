require("@nomiclabs/hardhat-waffle");

const { PROJECT_ID } = process.env.PROJECT_ID; //env file MUST be in the root folder (same as package-json)
const { PRIVATE_KEY } = process.env.PRIVATE_KEY;

console.log(PROJECT_ID);

module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 1337 //standard config for local configuration
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${PROJECT_ID}`,
      accounts: [PRIVATE_KEY]
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${PROJECT_ID}`,
      accounts: [PRIVATE_KEY]
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
