import { render, fireEvent } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

it("should render", function () {
  render(<NewTodoForm />);
});

it("should match snapshot", function () {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});
