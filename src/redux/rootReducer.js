import { combineReducers } from "redux";

// REDUCERS
import itemsReducer from "./Items/items.reducer";
import balanceReducer from "./balance/balance.reducer";

export default combineReducers({
  items: itemsReducer,
  balance: balanceReducer
});
