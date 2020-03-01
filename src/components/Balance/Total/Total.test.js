import React from "react";
import { render } from "@testing-library/react";
import Total from "./Total.component";
import { useSelector } from "react-redux";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(fn => fn()),
  useDispatch: () => jest.fn()
}));

test("should show total value", () => {
  useSelector.mockReturnValue(1000);
  const { container } = render(<Total />);
  expect(container).toHaveTextContent("1000");
});
