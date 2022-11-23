import { render, screen, waitFor } from "@testing-library/react";
import { mockGet } from "../mocks/server";
import { Home } from "./Home";

describe("Home", () => {
  it("renders main title", () => {
    mockGet("/api/product", (_, res, ctx) => {
      return res(ctx.json([]));
    });

    render(<Home />);
    const title = screen.getByText(/floristería dulces pétalos/i);

    expect(title).toBeInTheDocument();
  });

  it("renders a list view", async () => {
    mockGet("/api/product", (_, res, ctx) => {
      return res(
        ctx.json([
          {
            id: "ZmGrkLRPXOTpxsU4jjAcv",
            name: "Orquídea",
            binomialName: "Ophrys tenthredinifera",
            price: 4.95,
            wateringsPerWeek: 1,
          },
          {
            id: "ND1elEt4nqZrCeFflDUZ2",
            name: "Rosa de damasco",
            binomialName: "Rosa damascena",
            price: 10.5,
          },
        ])
      );
    });

    render(<Home />);

    await waitFor(() => {
      expect(screen.getByText(/orquídea/i)).toBeInTheDocument();
    });
    expect(screen.getByText(/rosa de damasco/i)).toBeInTheDocument();
  });
});
