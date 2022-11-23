import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders home page", () => {
  render(<App />);
  const linkElement = screen.getByText(/floristería dulces pétalos/i);
  expect(linkElement).toBeInTheDocument();
});
