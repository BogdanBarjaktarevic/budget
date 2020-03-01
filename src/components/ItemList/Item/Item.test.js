import React from "react";
import { render } from "@testing-library/react";
import Item from "./Item.component";

test("should render item", () => {
  const mockItem = {
    id: 1,
    description: "mock-description",
    amount: "mock-amount",
    operator: "mock-operator"
  };
  const { queryByText } = render(<Item item={mockItem} />);
  expect(queryByText(mockItem.description)).toBeTruthy();
});
