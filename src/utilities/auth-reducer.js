import { AUTHORIZE, USER_DATA, TOKEN } from "./actions";

const authReducer = (state, action) => {
  switch (action.type) {
    case USER_DATA:
      return { ...state, userData: action.payload };
    case AUTHORIZE:
      return { ...state, isAuth: action.payload };
    case TOKEN:
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

export default authReducer;