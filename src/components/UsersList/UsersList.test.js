import { screen } from "@testing-library/react";
import UsersList from "./UsersList";
import { BrowserRouter } from "react-router-dom";
import renderWithProviders from "../../setupTests";

describe("Given a UsersList component", () => {
  describe("When it is rendered with an array of 2 users", () => {
    test("Then it should show a list with the two users", () => {
      const users = [
        {
          id: 4,
          name: "testing usr",
          image: "",
          username: "",
        },
        {
          id: 99,
          name: "testing usr 5",
          image: "",
          username: "",
        },
      ];

      renderWithProviders(
        <BrowserRouter>
          <UsersList users={users} />
        </BrowserRouter>
      );

      const listOfUsers = screen.getAllByRole("listitem").length;

      expect(listOfUsers).toBe(users.length);
    });
  });
});
