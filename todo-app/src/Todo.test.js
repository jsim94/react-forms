import { render, fireEvent } from "@testing-library/react";
import Todo from "./Todo";

it("should render", function () {
  render(<Todo funcs={{ handleDelete: null }} />);
});

it("should match snapshot", function () {
  const { asFragment } = render(
    <Todo content="Test todo" funcs={{ handleDelete: null }} />
  );
  expect(asFragment()).toMatchSnapshot();
});
