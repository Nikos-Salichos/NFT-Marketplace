const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Should mint and trade NFTs", async function () {
    const Market = await ethers.getContractFactory('KBMarket')
    const market = await Market.deploy();
    await market.deployed();
    const marketAddress = market.address

  });
});
