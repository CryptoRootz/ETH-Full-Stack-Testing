require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  solidity: "0.8.3",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {},
    ropsten: {
      url: "https://ropsten.infura.io/v3/4fc90939f04e4d51bde7620cd2807c57",
      accounts: [`0x${"21ddf60c82a859d6b2531c1ccc37027ccae9c0fb301b5d8447486e7e1f0a9e2a"}`]
    }
  },
  networks: {
    hardhat: {
      chainId: 3
    }
  }
};

