// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";

contract calculator {
    function add(int256 a, int256 b) public pure returns (int256) {
        int256 sum = a + b;

        return (sum);
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

    /*
    int a ; 
    int b ; 
    
 
    event log(address indexed sender, string message, int result); 


    // Add 
 
    function add() public view returns(int){ 
        int result = a + b; 
       
        return result; 
 
    } 
     
    function getAddition(int _a, int _b) public returns (int){ 
        a = _a; 
        b = _b; 
        int addition = add();

        emit log(msg.sender, "the add function was called", addition);

        return addition; 
    }
    


    // Subtraction

    function subtraction() public view returns(int){
        int result = a - b;
        return result;
    } 

    function getSubtraction(int _a, int _b) public returns (int){ 
        a = _a; 
        b = _b; 
        int sub = subtraction();
        emit log(msg.sender, "the subtraction function was called", sub); 
        return sub; 
    }

    // multiplication

    function multiplaction() public view returns(int){
        int result = a * b;
        return result;
    } 

    function getMultiplaction(int _a, int _b) public returns (int){ 
        a = _a; 
        b = _b; 
        int mult = multiplaction();
        emit log(msg.sender, "the multiplaction function was called", mult); 
        return mult; 
    }

    // division

    function division() public view returns(int){
        int result = a / b;
        return result;
    } 

    function getDivision(int _a, int _b) public returns (int){ 
        a = _a; 
        b = _b;
        require(b > 0, "The second parameter should be larger than 0");
        int div = division();
        emit log(msg.sender, "the division function was called", div); 
        return div; 
    }
    */
}
