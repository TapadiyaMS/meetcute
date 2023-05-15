import { SET_USER, GET_USERS } from "../actions/actionType";

const INITIAL_STATE = {
  user: null,
  users: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case GET_USERS:
      return {
        ...state,
        users: action.users,
      };
    default:
      return state;
  }
};

export default userReducer;
