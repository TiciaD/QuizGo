import {
  ADD_USER_QUES,
  ADD_USER_OPTIONS,
  ADD_CORRECT,
  ADD_USER_CAT,
  ADD_USER_DIF,
  ADD_ALL_QUES,
} from "./actions";

const userQuizReducer = (state, action) => {
  switch (action.type) {
    case ADD_USER_QUES:
      return { ...state, userQuestions: action.payload };
    //   return {
    //     ...state,
    //     userQuestions: [...state.userQuestions, action.payload],
    //   };
    case ADD_USER_OPTIONS:
      return { ...state, userOptions: action.payload };
    case ADD_USER_CAT:
      return { ...state, userCategory: action.payload };
    case ADD_ALL_QUES:
      return {
        ...state,
        allQuestions: [...state.allQuestions, action.payload],
      };
    case ADD_CORRECT:
      return { ...state, correct: action.payload };
    default:
      return state;
  }
};

export default userQuizReducer;
