import { handleBalance } from "../balance/balance.utils";
import * as balanceTypes from "./balance.types";

export const updateBalance = item => {
  return {
    type: balanceTypes.UPDATE_BALANCE,
    payload: handleBalance(item)
  };
};
