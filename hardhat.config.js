require("@nomiclabs/hardhat-waffle");

const projectId = '15302d023628474c9675e73c06b382cb'
const privateKey = '82f13e9e763e15f3d6fae80d49ee8e94809bff5a0245ddea0455a099fa69e700'

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
