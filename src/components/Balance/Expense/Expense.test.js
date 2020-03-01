import React from "react";
import { render } from "@testing-library/react";
import Expense from "./Expense.component";
import { useSelector } from "react-redux";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(fn => fn()),
  useDispatch: () => jest.fn()
}));

test("should show expense value", () => {
  useSelector.mockReturnValue(300);
  const { container } = render(<Expense />);
  expect(container).toHaveTextContent("300");
});
