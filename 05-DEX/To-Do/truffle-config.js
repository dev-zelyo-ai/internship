module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "5777" // Match any network id
    }
  },

  // Updated compiler configuration
  compilers: {
    solc: {
      version: "0.8.19",  // <-- match your contract's pragma
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  }
};
