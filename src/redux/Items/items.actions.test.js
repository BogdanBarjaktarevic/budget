import { addItem } from "./items.actions";
import * as itemTypes from "./items.types";

describe("addItem action", () => {
  test("should create the addItem action", () => {
    const mockItem = {
      id: 1,
      description: "mock-description",
      amount: "mock-amount",
      operator: "mock-operator"
    };

    const action = addItem(mockItem);
    expect(action.type).toEqual(itemTypes.ADD_ITEM);
    expect(action.payload).toEqual({ 1: mockItem });
  });
});
