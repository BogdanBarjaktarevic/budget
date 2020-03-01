import React from "react";
import { useSelector } from "react-redux";

// REDUX SELECTORS
import { selectTotalBalance } from "../../../redux/balance/balance.selectors";

const Total = () => {
  const totalBalance = useSelector(selectTotalBalance);
  return <div>Total: {totalBalance}</div>;
};

export default Total;
