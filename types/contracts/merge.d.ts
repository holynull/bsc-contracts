/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

/// <reference types="truffle-typings" />

import * as TruffleContracts from ".";

declare global {
  namespace Truffle {
    interface Artifacts {
      require(name: "BEP20"): TruffleContracts.BEP20Contract;
      require(name: "IBEP20"): TruffleContracts.IBEP20Contract;
      require(name: "SmartSwap"): TruffleContracts.SmartSwapContract;
    }
  }
}
