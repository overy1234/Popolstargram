require('babel-register');
require('babel-polyfill');
require('dotenv').config();
var HDWalletProvider = require('truffle-hdwallet-provider');
var privateKeys = "phrase joy assist label admit company first pulse trigger height eagle design";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(
          privateKeys, // Array of account private keys
          `https://ropsten.infura.io/v3/6261a6b4589e4c6880c763518701462b`// Url to an Ethereum Node
        )
      },
      gas: 5000000,
      gasPrice: 25000000000,
      network_id: 3
    }
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}