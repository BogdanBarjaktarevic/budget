import { createSelector } from "reselect";

const selectBalance = state => state.balance;

export const selectBalanceObject = createSelector(
  [selectBalance],
  balance => balance.balance
);

export const selectTotalBalance = createSelector(
  [selectBalanceObject],
  balance => balance.total
);

export const selectIncomeBalance = createSelector(
  [selectBalanceObject],
  balance => balance.income
);

export const selectExpenseBalance = createSelector(
  [selectBalanceObject],
  balance => balance.expense
);
