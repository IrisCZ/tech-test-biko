import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { mockGet } from "../../mocks/server";
import { Detail } from "./Detail";

describe("Home", () => {
  it("renders main title", () => {
    mockGet("/api/product", (_, res, ctx) => {
      return res(ctx.json([]));
    });

    renderComponent();
    const title = screen.getByText(/floristería dulces pétalos/i);

    expect(title).toBeInTheDocument();
  });
});

const renderComponent = () => {
  render(
    <Router>
      <Detail />
    </Router>
  );
};
