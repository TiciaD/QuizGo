import {
  TOGGLE_BUTTON,
  CATEGORY,
  DIFFICULTY,
  ERROR,
  ADD_QUESTIONS,
  ADD_SCORE,
  OPTIONS,
} from "./quiz-actions";

const quizReducer = (state, action) => {
  switch (action.type) {
    case ADD_QUESTIONS:
      return { ...state, questions: action.payload };
    case ADD_SCORE:
      return {};
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
    default:
      return state;
  }
};

export default quizReducer;
