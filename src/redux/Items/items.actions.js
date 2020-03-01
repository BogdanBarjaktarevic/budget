import * as itemsTypes from "./items.types";
import { itemToAdd } from "./items.utils";

export const addItem = item => {
  return {
    type: itemsTypes.ADD_ITEM,
    payload: itemToAdd(item)
  };
};
