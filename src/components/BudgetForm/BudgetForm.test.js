import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BudgetForm from "./BudgetForm.component";
import { Provider } from "react-redux";
import store from "../../redux/store";

const setup = placeholder => {
  const utils = render(
    <Provider store={store}>
      <BudgetForm />
    </Provider>
  );
  const input = utils.getByPlaceholderText(`${placeholder}`);
  return {
    input,
    ...utils
  };
};

describe("Description input", () => {
  test("should render description input", () => {
    const { input } = setup("Description");
    expect(input).toBeTruthy();
  });

  test("should input and empty description input value", () => {
    const { input } = setup("Description");

    expect(input.value).toBe("");
  });

  test("should update input value onChange", () => {
    const { input } = setup("Description");
    fireEvent.change(input, { target: { value: "New Car" } });
    expect(input.value).toBe("New Car");
  });
});

describe("Amount input", () => {
  test("should render amount input", () => {
    const { input } = setup("Description");
    expect(input).toBeTruthy();
  });

  test("should render empty amount input value", () => {
    const { input } = setup("Amount");
    expect(input.value).toBe("");
  });

  test("should update input value onChange", () => {
    const { input } = setup("Amount");
    fireEvent.change(input, { target: { value: "200" } });
    expect(input.value).toBe("200");
  });
});

describe("Select operator", () => {
  test("should render + initialy select option", () => {
    const { getByDisplayValue } = render(
      <Provider store={store}>
        <BudgetForm />
      </Provider>
    );
    const selectElement = getByDisplayValue("+");
    expect(selectElement.value).toBe("+");
  });

  test("should select '-' when minus option selected", () => {
    const { getByDisplayValue } = render(
      <Provider store={store}>
        <BudgetForm />
      </Provider>
    );
    const selectElement = getByDisplayValue("+");
    fireEvent.change(selectElement, { target: { value: "-" } });
    expect(selectElement.value).toBe("-");
  });
});

describe("Submit button", () => {
  test("should render submit button", () => {
    const { getByText } = render(
      <Provider store={store}>
        <BudgetForm />
      </Provider>
    );
    const submitButton = getByText("Add");
    expect(submitButton).toBeTruthy();
  });
});
