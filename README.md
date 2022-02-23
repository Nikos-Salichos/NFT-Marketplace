# NFT-Marketplace

It is an NFT-Marketplace with the following concepts:
-	See all NFTs from all users.
-	Mint your own NFTs and set your own selling price.
-	See all NFTs that you own.
-	Account Dashboard.


**Technologies**
Backend:
- Next.js https://nextjs.org/
- Solidity https://docs.soliditylang.org/en/v0.8.12/
-	Ethers.js https://docs.ethers.io/
-	Hardhat framework https://hardhat.org/
-	OpenZeppelin https://openzeppelin.com/

Frontend:
-	React https://reactjs.org/
-	Tailwind css https://tailwindcss.com/

Storage:
-	IPFS https://ipfs.io/

**Requirements**

- Infura key https://infura.io/
- Metamask wallet (or any other crypto wallet) https://metamask.io/

**Instructions**

In terminal:
-	npm install
-	npm run dev (start next.js)
-	npx hardhat node (start hardhat)
-	npx hardhat run script/deploy.js --network localhost (deploy smart contract)
-	copy paste a private key and import it in Metamask (you need to do it only once)
-	In file config.js type single quotes like:

  export const nftMarketAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'
  
  export const nftAddress = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512'
  
-	Open localhost in browser

I suggest you every time you connect to localhost to click Settings--> Advanced --> Reset Account 

You need to reset nonce each time you restart the local node (because Metamask holds your last nonce)

![nextjs](https://user-images.githubusercontent.com/70713775/155010856-415fdcda-f028-4156-b0e6-d471faf24ee3.png)
![solidity](https://user-images.githubusercontent.com/70713775/155010893-71fe47f7-024c-4893-b56e-01c8acf5ffe8.jpg)
![ethers-js](https://user-images.githubusercontent.com/70713775/155010910-ec54d78d-7195-4c24-a2a6-35f3de619339.png)
![hardhat](https://user-images.githubusercontent.com/70713775/155010919-5ca0fa8f-6bf5-4dd8-9904-e4d239c5bb0c.jpg)
![openzeppelin](https://user-images.githubusercontent.com/70713775/155010928-33a8ac99-3701-4647-bdb2-b09c5c3ba140.png)
![react](https://user-images.githubusercontent.com/70713775/155010936-920c6e6b-a057-4d6f-b619-303a081f4d44.png)
![tailwindcss](https://user-images.githubusercontent.com/70713775/155010969-1d31d918-e2a1-4c1f-a520-156ca528247c.jpg)
![ipfs](https://user-images.githubusercontent.com/70713775/155010980-6d34ba60-a90e-4fe2-92e0-a37ba9d70cc1.png)
