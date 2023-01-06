// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require('hardhat');

async function main() {
  const calculator = await hre.ethers.getContractFactory('calculator');
  const contract = await calculator.deploy();

  await contract.deployed();
  // const transactionResponse = await contract.add(2, 3);
  // const transactionReceipt = await transactionResponse.wait();
  // console.log(transactionReceipt);
  // console.log(transactionReceipt.events[0].args.firstNumber.toString());
  // console.log(transactionReceipt.events[0].args.secondNumber.toString());
  // console.log(transactionReceipt.events[0].args.result.toString());
  // console.log(transactionReceipt.events[0].args.sender);

  // console.log(`Contract depolyed to ${contract.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
