// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";

contract calculator {
    int256 result;

    event log(address indexed sender, string message, int256 result);

    // Add

    function add(int256 a, int256 b) public returns (int256) {
        result = a + b;
        emit log(msg.sender, "the add function was called", result);
        return result;
    }

    // Subtraction

    function sub(int256 a, int256 b) public returns (int256) {
        result = a - b;

        emit log(msg.sender, "the subtraction function was called", result);
        return result;
    }

    // multiplication

    function mult(int256 a, int256 b) public returns (int256) {
        result = a * b;
        emit log(msg.sender, "the multiplaction function was called", result);
        return result;
    }

    // division

    function div(int256 a, int256 b) public returns (int256) {
        result = a / b;
        require(b > 0, "The second parameter should be larger than 0");
        emit log(msg.sender, "the division function was called", result);
        return result;
    }

    /*

    function add(int256 a, int256 b) public pure returns(int256) {

        int256 sum = a + b;
        
        return sum;

    }

    function sub(int256 c, int256 d) public pure returns (int256) {
        int256 result_sub = c - d;
        return result_sub;
    }

    function mult(int256 e, int256 f) public pure returns (int256) {
        int256 result_mult = e * f;
        return result_mult;
    }

    function div(int256 g, int256 h) public pure returns (int256) {
        require(h > 0, "The second parameter should be larger than 0");
        int256 result_div = g / h;
        return result_div;
    }
    */
}
