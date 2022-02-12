const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Should mint and trade NFTs", async function () {

    //test to receive contract address
    const Market = await ethers.getContractFactory('KBMarket')
    const market = await Market.deploy();
    await market.deployed();
    const marketAddress = market.address

    //test to receive NFT address
    const NFT = await ethers.getContractFactory('NFT');
    const nft = await NFT.deploy(marketAddress);
    await nft.deployed();
    const nftContractAddress = nft.address;

    //test to receive listing price and auction price
    let listingPrice = await market.getListingPrice();
    listingPrice = listingPrice.ToString();

    const auctionPrice = ethers.utils.parseUnits('100', 'ether');

    //test for minting
    await nft.mintToken('https-t1')
    await nft.mintToken('https-t2')

    await market.makeMarketItem(nftContractAddress, 1 , auctionPrice, {value: listingPrice})
    await market.makeMarketItem(nftContractAddress, 2 , auctionPrice, {value: listingPrice})


    //test for different addresses from different users - test accounts
    //return an array of many addresses

  });
});
