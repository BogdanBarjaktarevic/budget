import * as balanceTypes from "./balance.types";
import balanceReducer from "./balance.reducer";

const initialState = {
  balance: {
    expense: 0,
    income: 0,
    total: 0
  }
};

describe("Balance reducer", () => {
  test("should return initial state", () => {
    expect(balanceReducer(undefined, {})).toEqual(initialState);
  });

  test("should update balance", () => {
    const mockBalance = {
      expense: 0,
      income: 200,
      total: 200
    };

    expect(
      balanceReducer(initialState, {
        type: balanceTypes.UPDATE_BALANCE,
        payload: mockBalance
      }).balance
    ).toBe(mockBalance);
  });
});
