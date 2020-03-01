import React from "react";
import { render } from "@testing-library/react";
import App from "./App.component";
import store from "../../redux/store";
import { Provider } from "react-redux";

const setup = id => {
  const utils = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const component = utils.getByTestId(`${id}`);
  return {
    component,
    ...utils
  };
};

test("should render Balance component", () => {
  const { component } = setup("balance");
  expect(component).toBeTruthy();
});

test("should render ItemList component", () => {
  const { component } = setup("balance");
  expect(component).toBeTruthy();
});

test("should render BudgetForm component", () => {
  const { component } = setup("balance");
  expect(component).toBeTruthy();
});
