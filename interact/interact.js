require('dotenv').config();

const { ethers } = require('hardhat');
const contract = require("../artifacts/contracts/Lock.sol/Lock.json");

const { API_KEY, PRIVATE_KEY, CONTRACT_ADDRESS } = process.env;

const provider = new ethers.AlchemyProvider("sepolia", API_KEY);

const signer = new ethers.Wallet(PRIVATE_KEY, provider);

const lock = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer)

async function main() {
    const tx = await lock.withdraw();
    await tx.wait();
}

main()
    .then(() => process.exit(0))
    .catch(err => {
        console.error(err);
        process.exit(1);
    })
