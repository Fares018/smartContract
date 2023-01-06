const { anyValue } = require('@nomicfoundation/hardhat-chai-matchers/withArgs');
const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Calculator', function () {
  it('test add function', async function () {
    const Calculator = await ethers.getContractFactory('calculator');
    const calculator = await Calculator.deploy();
    contract = await calculator.deployed();
    console.log('calculator deployed at:' + calculator.address);
    const transactionResponse = await calculator.add(4, 5);
    const transactionReceipt = await transactionResponse.wait();
    const endResult = transactionReceipt.events[0].args.result;
    console.log(endResult);

    expect(endResult).to.equal(9);
  });

  it('test substraction function', async function () {
    const Calculator = await ethers.getContractFactory('calculator');
    const calculator = await Calculator.deploy();
    contract = await calculator.deployed();
    console.log('calculator deployed at:' + calculator.address);
    const transactionResponse = await calculator.sub(-5, -5);
    const transactionReceipt = await transactionResponse.wait();
    const endResult = transactionReceipt.events[0].args.result;
    console.log(endResult);

    expect(endResult).to.equal(0);
  });

  it('test multiplaction function', async function () {
    const Calculator = await ethers.getContractFactory('calculator');
    const calculator = await Calculator.deploy();
    contract = await calculator.deployed();
    console.log('calculator deployed at:' + calculator.address);
    const transactionResponse = await calculator.mult(4, 5);
    const transactionReceipt = await transactionResponse.wait();
    const endResult = transactionReceipt.events[0].args.result;
    console.log(endResult);

    expect(endResult).to.equal(20);
  });

  it('test division function', async function () {
    const Calculator = await ethers.getContractFactory('calculator');
    const calculator = await Calculator.deploy();
    contract = await calculator.deployed();
    console.log('calculator deployed at:' + calculator.address);
    const transactionResponse = await calculator.div(20, 4);
    const transactionReceipt = await transactionResponse.wait();
    const endResult = transactionReceipt.events[0].args.result;
    console.log(endResult);

    expect(endResult).to.equal(5);
  });
});
