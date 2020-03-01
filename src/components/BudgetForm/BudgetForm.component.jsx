import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/Items/items.actions";
import { updateBalance } from "../../redux/balance/balance.actions";

const BudgetForm = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [operator, setOperator] = useState("+");
  let descInput = React.createRef();
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    if (amount === "" || description === "" || isNaN(amount)) return;
    const formObj = {
      id: uuidv4(),
      description,
      amount,
      operator
    };
    dispatch(addItem(formObj));
    dispatch(updateBalance(formObj));
    setDescription("");
    setAmount("");
    descInput.current.focus();
  };

  return (
    <form onSubmit={handleSubmit} data-testid="budget-form">
      <input
        placeholder="Description"
        ref={descInput}
        type="text"
        value={description}
        onChange={event => setDescription(event.target.value)}
      />
      <input
        placeholder="Amount"
        type="text"
        value={amount}
        onChange={event => setAmount(event.target.value)}
      />
      <select
        value={operator}
        onChange={event => setOperator(event.target.value)}
      >
        <option value="+">+</option>
        <option value="-">-</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
};

export default BudgetForm;
