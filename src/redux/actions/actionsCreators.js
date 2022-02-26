import { actionsTypes } from "./actionsTypes";

export const setUserAction = (user) => ({
  type: actionsTypes.setUser,
  user,
});
