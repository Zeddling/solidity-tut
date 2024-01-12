const {
    time,
    loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SimpleStorage", () => {

    describe("set", () => {
        it("Should set the given value", async function() {
            const want = 10;
            const storage = await ethers.deployContract("SimpleStorage",[100]);
            await storage.set(want);
    
            expect(await storage.get()).to.equal(want);
        })
    })

    describe("get", () => {
        it("Should return storedData's value", async () => {
            const want = 100;
            const storage = await ethers.deployContract("SimpleStorage",[want]);

            expect(await storage.get()).to.equal(want);
        })
    })

})
