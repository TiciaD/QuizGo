import {
  ADD_USER_QUES,
  ADD_NAME,
  ADD_USER_CAT,
  ADD_USER_DIF,
  ADD_ALL_QUES,
  RESET_ALL_QUES,
} from "./actions";

const userQuizReducer = (state, action) => {
  switch (action.type) {
    case ADD_USER_QUES:
      return { ...state, userQuestions: action.payload };
    case ADD_NAME:
      return { ...state, quizName: action.payload };
    case ADD_USER_CAT:
      return { ...state, userCategory: action.payload };
    case ADD_ALL_QUES:
      return {
        ...state,
        allQuestions: [...state.allQuestions, action.payload],
      };
    case ADD_USER_DIF:
      return { ...state, userDifficulty: action.payload };
    case RESET_ALL_QUES:
      return { ...state, allQuestions: [] };
    default:
      return state;
  }
};

export default userQuizReducer;
