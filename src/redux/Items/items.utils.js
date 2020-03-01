import store from "../store";

export const itemToAdd = item => {
  const itemList = store.getState().items.itemList;
  return { ...itemList, [item.id]: item };
};
