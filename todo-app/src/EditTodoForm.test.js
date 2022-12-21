import { render, fireEvent } from "@testing-library/react";
import EditTodoForm from "./NewTodoForm";

it("should render", function () {
  render(<EditTodoForm />);
});

it("should match snapshot", function () {
  const { asFragment } = render(<EditTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});
