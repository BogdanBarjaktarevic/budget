import * as balanceTypes from "./balance.types";

const initialState = {
  balance: {
    total: 0,
    income: 0,
    expense: 0
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case balanceTypes.UPDATE_BALANCE:
      return {
        ...state,
        balance: action.payload
      };
    default:
      return state;
  }
};
