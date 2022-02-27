import { actionsTypes } from "./actionsTypes";

export const setUserAction = (user) => ({
  type: actionsTypes.setUser,
  user,
});

export const loadUsersAction = (users) => ({
  type: actionsTypes.loadUsers,
  users,
});
