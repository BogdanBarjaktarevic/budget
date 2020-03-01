import { updateBalance } from "./balance.actions";
import * as balanceTypes from "./balance.types";

describe("updateBalance action", () => {
  test("should update balance", () => {
    const mockItem = {
      id: 1,
      description: "mock-description",
      amount: 200,
      operator: "+"
    };

    const action = updateBalance(mockItem);
    expect(action.type).toEqual(balanceTypes.UPDATE_BALANCE);
    expect(action.payload).toEqual({ income: 200, total: 200, expense: 0 });
  });
});
