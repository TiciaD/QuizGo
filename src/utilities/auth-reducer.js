import { USER_QUIZZES, USER_DATA, TOKEN, ALL_QUIZZES } from "./actions";

const authReducer = (state, action) => {
  switch (action.type) {
    case USER_DATA:
      return { ...state, userData: action.payload };
    case USER_QUIZZES:
      return { ...state, userQuizzes: action.payload };
    case TOKEN:
      return { ...state, token: action.payload };
      case ALL_QUIZZES:
      return { ...state, allQuizzes: action.payload };
    default:
      return state;
  }
};

export default authReducer;
