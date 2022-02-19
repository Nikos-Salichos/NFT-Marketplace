import { ethers } from 'ethers';
import { useState } from 'react';
import Web3Modal from 'web3modal'
import { create as ipfsHttpClient } from 'ipfs-http-client';

import { nftAddress, nftMarketAddress } from '../config'

import NFT from '../artifacts/contracts/NFT.sol/NFT.json';
import KBMarket from '../artifacts/contracts/KBMarket.sol/KBMarket.json'

//In this component we set the ipfs up to host our nft data of file storage

const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

export default function MintItem() {
    const [fileUrl, setFileUrl] = useState(null)
    const [formInput, updateFormInput] = useState({ price: '', name: '', description: '' })
    const router = useRouter()

    //set up a function to fireoff when we update files in our form - we can add our NFT images in IPFS

    async function onChange(e) {
        const file = e.target.files[0]
        try {
            const added = await client.add(
                file, {
                progress: (prog) => console.log(`received: ${prog}`)
            })
            const url = `https://ipfs.infura.io:5001/api/v0/${added.path}`
            setFileUrl(url)
        } catch (error) {
            console.log('Error uploading file:', error)
        }
    }

    async function createMarket() {
        const { name, description, price } = formInput
        if (!name || !description || !price || !fileUrl) {
            return;
        }

        // Upload to IPFS
        const data = JSON.stringify(){
            name, description, image: fileUrl
        }
        try {
            const added = await client.add(data)
            const url = `https://ipfs.infura.io:5001/api/v0/${added.path}`
            //run a function that creates sale and passes in the url
            createSale(url)
        } catch (error) {
            console.log('Error uploading file:', error)
        }
    }

    async function createSale(url) {
        const web3Modal = new Web3Modal(
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider
        )
    }

}