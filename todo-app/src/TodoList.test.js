import { render, fireEvent, getByRole } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TodoList from "./TodoList";

it("should render", function () {
  render(<TodoList />);
});

it("should match snapshot", function () {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("should add a new todo", function () {
  const list = render(<TodoList />);
  const todoInput = list.getByLabelText("Todo");
  fireEvent.change(todoInput, { target: { value: "test todo" } });
  const submit = list.getByRole("button");
  fireEvent.click(submit);

  expect(list.getByLabelText("Todo")).toHaveValue("");
  expect(list.getByText("test todo")).toBeInTheDocument();
});
