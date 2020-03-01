import React from "react";

// COMPONENTS
import Total from "./Total/Total.component";
import Expense from "./Expense/Expense.component";
import Income from "./Income/Income.component";

const Balance = () => {
  return (
    <div data-testid="balance">
      <Total />
      <Income />
      <Expense />
    </div>
  );
};

export default Balance;
