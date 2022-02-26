import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import renderWithProviders from "./setupTests";

test("renders a list", () => {
  renderWithProviders(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const menu = screen.getByRole("list");
  expect(menu).toBeInTheDocument();
});
