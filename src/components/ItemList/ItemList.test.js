import React from "react";
import { render } from "@testing-library/react";
import ItemList from "./ItemList.component";

import { useSelector } from "react-redux";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(fn => fn()),
  useDispatch: () => jest.fn()
}));

test("Should render items inside ItemList", () => {
  useSelector.mockReturnValue([
    {
      id: 1,
      description: "mock-description",
      amount: "mock-amount",
      operator: "mock-operator"
    }
  ]);
  const { container } = render(<ItemList />);
  expect(container).toHaveTextContent("mock-description");
});
