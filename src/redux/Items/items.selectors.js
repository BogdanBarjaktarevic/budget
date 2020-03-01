import { createSelector } from "reselect";

const selectItems = state => state.items;

export const selectItemList = createSelector([selectItems], items =>
  Object.values(items.itemList)
);
