const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Should mint and trade NFTs", async function () {
    const Market = await ethers.getContractFactory('KBMarket')
    const market = await Market.deploy();
    await market.deployed();
    const marketAddress = market.address

    const NFT = await ethers.getContractFactory('NFT');
    const nft = await NFT.deploy(marketAddress);
    await nft.deployed();
    const nftContractAddress = nft.address;

    let listingPrice = await market.getListingPrice();
    listingPrice = listingPrice.ToString();

  });
});
