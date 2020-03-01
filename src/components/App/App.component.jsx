import React from "react";

// COMPONENTS
import BudgetForm from "../BudgetForm/BudgetForm.component";
import ItemList from "../ItemList/ItemList.component";
import Balance from "../Balance/Balance.component";

const App = () => {
  return (
    <div data-testid="app">
      <Balance />
      <ItemList />
      <BudgetForm />
    </div>
  );
};

export default App;
