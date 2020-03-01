import React from "react";
import { render } from "@testing-library/react";
import Income from "./Income.component";
import { useSelector } from "react-redux";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(fn => fn()),
  useDispatch: () => jest.fn()
}));

test("should show income value", () => {
  useSelector.mockReturnValue(500);
  const { container } = render(<Income />);
  expect(container).toHaveTextContent("500");
});
