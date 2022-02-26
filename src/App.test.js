import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("renders a list", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const menu = screen.getByRole("list");
  expect(menu).toBeInTheDocument();
});
