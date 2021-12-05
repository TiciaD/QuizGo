import {
  TOGGLE_BUTTON,
  AUTHORIZE,
  CATEGORY,
  DIFFICULTY,
  ERROR,
  ADD_QUESTIONS,
  ADD_SCORE,
  OPTIONS,
  CURRENT_QUESTION,
} from "./quiz-actions";

const quizReducer = (state, action) => {
  switch (action.type) {
    case ADD_QUESTIONS:
      return { ...state, questions: action.payload };
    case AUTHORIZE:
      return { ...state, isAuth: action.payload };
    case ADD_SCORE:
      return { ...state, score: action.payload };
    case TOGGLE_BUTTON:
      return { ...state, toggledItem: action.payload };
    case CATEGORY:
      return { ...state, category: action.payload };
    case DIFFICULTY:
      return { ...state, difficulty: action.payload };
    case ERROR:
      return { ...state, error: action.payload };
    case OPTIONS:
      return { ...state, options: action.payload };
    case CURRENT_QUESTION:
      return { ...state, currQuestion: action.payload };
    default:
      return state;
  }
};

export default quizReducer;
