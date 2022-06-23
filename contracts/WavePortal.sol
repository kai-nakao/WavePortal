// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
	uint256 totalSum;

    constructor() {
        console.log("Yo yo, I am a contract and I am smart");
    }

	function purchase() public {
		totalSum += 110;
		console.log("%s has purchased!", msg.sender);
	}

	function getTotalSum() public view returns (uint256) {
		console.log("we have %d total Sum!", totalSum);
		return totalSum;
	}
}
