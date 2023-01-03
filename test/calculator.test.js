const { anyValue } = require('@nomicfoundation/hardhat-chai-matchers/withArgs');
const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Calculator', function () {
  it('test add function', async function () {
    const Calculator = await ethers.getContractFactory('calculator');
    const calculator = await Calculator.deploy();
    contract = await calculator.deployed();
    console.log('calculator deployed at:' + calculator.address);
    const sum = await calculator.add(4, 5);
    console.log('******', sum);
    console.log('####', sum.data);
    expect(sum).to.equal(9);
  });

  it('test substraction function', async function () {
    const Calculator = await ethers.getContractFactory('calculator');
    const calculator = await Calculator.deploy();
    await calculator.deployed();
    console.log('calculator deployed at:' + calculator.address);
    expect(await calculator.sub(-5, -5)).to.equal(0);
  });
  it('test multiplaction function', async function () {
    const Calculator = await ethers.getContractFactory('calculator');
    const calculator = await Calculator.deploy();
    await calculator.deployed();
    console.log('calculator deployed at:' + calculator.address);
    expect(await calculator.mult(4, 5)).to.equal(20);
  });
  it('test division function', async function () {
    const Calculator = await ethers.getContractFactory('calculator');
    const calculator = await Calculator.deploy();
    await calculator.deployed();
    console.log('calculator deployed at:' + calculator.address);
    expect(await calculator.div(16, 4)).to.equal(4);
  });

  /*
  
  it('test add function', async function () {
    const Calculator = await ethers.getContractFactory('calculator');
    const calculator = await Calculator.deploy();
    contract = await calculator.deployed();
    console.log('calculator deployed at:' + calculator.address);
    const sum = await calculator.getAddition(4, 5);
    console.log('******', sum);
    console.log('####', sum.data);
    expect(sum).to.equal(9);
  });
  

  it('test substraction function', async function () {
    const Calculator = await ethers.getContractFactory('calculator');
    const calculator = await Calculator.deploy();
    await calculator.deployed();
    console.log('calculator deployed at:' + calculator.address);
    expect(await calculator.sub(-5, -5)).to.equal(0);
  });
  it('test multiplaction function', async function () {
    const Calculator = await ethers.getContractFactory('calculator');
    const calculator = await Calculator.deploy();
    await calculator.deployed();
    console.log('calculator deployed at:' + calculator.address);
    expect(await calculator.mult(4, 5)).to.equal(20);
  });
  it('test division function', async function () {
    const Calculator = await ethers.getContractFactory('calculator');
    const calculator = await Calculator.deploy();
    await calculator.deployed();
    console.log('calculator deployed at:' + calculator.address);
    expect(await calculator.div(16, 4)).to.equal(4);
  });
  */
});
