import React from "react";
import { useSelector } from "react-redux";

// REDUX SELECTORS
import { selectIncomeBalance } from "../../../redux/balance/balance.selectors";

const Income = () => {
  const income = useSelector(selectIncomeBalance);
  return <div>Income: {income}</div>;
};

export default Income;
