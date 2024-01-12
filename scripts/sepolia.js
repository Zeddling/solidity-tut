const { ethers } = require("hardhat");


async function main() {
    const storage = await ethers.deployContract("SimpleStorage", [100]);

    await storage.waitForDeployment();

    console.log(`Contract Deployed to Address: ${storage.target}`);
}

main()
    .then(() => process.exit(0))
    .catch(err => {
        console.error(err);
        process.exit(1);
    })