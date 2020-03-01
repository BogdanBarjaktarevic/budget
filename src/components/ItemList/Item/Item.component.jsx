import React from "react";

const Item = ({ item }) => {
  const { description, amount } = item;
  return (
    <div>
      {description}
      <span>{amount}</span>
    </div>
  );
};

export default Item;
