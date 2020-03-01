import React from "react";
import { useSelector } from "react-redux";

// REDUX SELECTORS
import { selectExpenseBalance } from "../../../redux/balance/balance.selectors";

const Expense = () => {
  const expense = useSelector(selectExpenseBalance);
  return <div>Expense: {expense}</div>;
};

export default Expense;
