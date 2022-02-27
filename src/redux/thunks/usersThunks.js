import { loadUsersAction } from "../actions/actionsCreators";

export const loadUsersThunk = async (dispatch) => {
  const response = await fetch(
    `${process.env.REACT_APP_HEROKKU_API_URL}users/`
  );
  const users = await response.json();
  dispatch(loadUsersAction(users.users));
};
