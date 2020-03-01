import store from "../store";

export const handleBalance = item => {
  let { income, expense, total } = store.getState().balance.balance;
  const { operator, amount } = item;
  operator === "+" ? (income += +amount) : (expense += +amount);
  total = income - expense;
  return {
    income,
    expense,
    total
  };
};
