import { ethers } from "hardhat";
import { Blockchain } from "./common";
import { Address } from "./types";

const provider = ethers.provider;
export const getBlockchainUtils = () => new Blockchain(provider);

import {
  SetFixture,
} from "./fixtures";

export const getSetFixture = (ownerAddress: Address) => new SetFixture(provider, ownerAddress);

export {
  getAccounts,
  getEthBalance,
  getLastBlockTimestamp,
  getProvider,
  getTransactionTimestamp,
  getWaffleExpect,
  addSnapshotBeforeRestoreAfterEach,
  getRandomAccount,
  getRandomAddress,
  increaseTimeAsync,
  mineBlockAsync,
  cacheBeforeEach,
} from "./test";

export {
  bigNumberToData,
  bitcoin,
  divDown,
  ether,
  gWei,
  min,
  preciseDiv,
  preciseDivCeil,
  preciseMul,
  preciseMulCeil,
  preciseMulCeilInt,
  preciseDivCeilInt,
  sqrt,
  usdc,
  wbtc,
} from "./common";

export {
  calculateNewLeverageRatio,
  calculateCollateralRebalanceUnits,
  calculateMaxBorrowForDelever,
  calculateMaxRedeemForDeleverToZero,
  calculateTotalRebalanceNotionalPerpV2,
  calculateNewLeverageRatioPerpV2,
  calculateNewLeverageRatioPerpV2Basis
} from "./flexibleLeverageUtils";