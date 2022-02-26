import { setUserAction } from "../actions/actionsCreators";
import jwtDecode from "jwt-decode";

export const loginUserThunk = (user) => async (dispatch) => {
  const response = await fetch(
    `${process.env.REACT_APP_HEROKKU_API_URL}users/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
  );
  const responseData = await response.json();
  if (responseData.token) {
    const { id, name, username } = await jwtDecode(responseData.token);
    localStorage.setItem("userToken", responseData.token);
    dispatch(setUserAction({ id, name, username }));
  }
};
