import * as itemsTypes from "./items.types";

const initialState = {
  itemList: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case itemsTypes.ADD_ITEM:
      return {
        ...state,
        itemList: action.payload
      };
    default:
      return state;
  }
};
