const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "6329a62cf6724fb8bb9f47d1e5c12aa4";
//
// const fs = require('fs');
const mnemonic = "glow enable walnut barely noble custom tower coffee jewel switch chief stem";
module.exports = {

  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 9545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
     },
    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
        network_id: 4,       // rinkeby's id
        gas: 4500000,        // rinkeby has a lower block limit than mainnet
        gasPrice: 10000000000,
        confirmations: 2, // # of confs to wait between deployments. (default: 0)
        skipDryRun: true
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.4.25"  // ex:  "0.4.20". (Default: Truffle's installed solc)
    }
 }
}