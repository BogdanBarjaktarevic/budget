import React from "react";
import { useSelector } from "react-redux";

// REDUX SELECTORS
import { selectItemList } from "../../redux/Items/items.selectors";

// COMPONENTS
import Item from "./Item/Item.component";

const ItemList = () => {
  const items = useSelector(selectItemList);
  return (
    <div data-testid="item-list">
      {items.map(item => (
        <Item key={item.id} item={item}></Item>
      ))}
    </div>
  );
};

export default ItemList;
