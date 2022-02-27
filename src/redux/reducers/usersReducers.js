import { actionsTypes } from "../actions/actionsTypes";

const usersReducers = (currentUsers = [], action = {}) => {
  let newState;
  switch (action.type) {
    case actionsTypes.loadRobots:
      newState = action.users ? [...action.users] : [...currentUsers];
      break;
    default:
      newState = [...currentUsers];
  }
  return newState;
};

export default usersReducers;
