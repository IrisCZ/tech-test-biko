import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("renders main title", () => {
  render(<Home />);
  const linkElement = screen.getByText(/floristería dulces pétalos/i);
  expect(linkElement).toBeInTheDocument();
});
