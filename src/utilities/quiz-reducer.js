import {
  TOGGLE_BUTTON,
  CATEGORY,
  DIFFICULTY,
  TYPE,
  AMOUNT,
  ERROR,
  ADD_QUESTIONS,
  ADD_SCORE,
  OPTIONS,
  CURRENT_QUESTION,
} from "./actions";

const quizReducer = (state, action) => {
  switch (action.type) {
    case ADD_QUESTIONS:
      return { ...state, questions: action.payload };
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
    case TYPE:
      return { ...state, type: action.payload };
    case AMOUNT:
      return { ...state, amount: action.payload };
    default:
      return state;
  }
};

export default quizReducer;
