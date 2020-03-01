import * as itemTypes from "./items.types";
import itemsReducer from "./items.reducer";

const initialState = {
  itemList: {}
};

describe("Items reducer", () => {
  test("should return initial state", () => {
    expect(itemsReducer(undefined, {})).toEqual(initialState);
  });

  test("should add item", () => {
    const mockItem = {
      id: 1,
      description: "mock-description",
      amount: "mock-amount",
      operator: "mock-operator"
    };

    const mockItems = { ...{}, [mockItem.id]: mockItem };
    const mockPrevState = {
      items: {
        1: mockItem
      }
    };
    expect(
      itemsReducer(mockPrevState, {
        type: itemTypes.ADD_ITEM,
        payload: mockItems
      }).itemList
    ).toBe(mockItems);
  });
});
