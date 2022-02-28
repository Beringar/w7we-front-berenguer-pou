import { loadUsersAction } from "../actions/actionsCreators";

export const loadUsersThunk = (token) => async (dispatch) => {
  const response = await fetch(
    `${process.env.REACT_APP_HEROKKU_API_URL}users/`,
    {
      method: "GET",
      headers: new Headers({
        Authorization: token,
        "Content-Type": "application/json",
      }),
    }
  );
  const users = await response.json();
  dispatch(loadUsersAction(users.users));
};
