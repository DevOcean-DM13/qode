import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from "redux-promise-middleware";

// Reducer Imports
import userReducer from "./userReducer";
import lessonReducer from "./lessonReducer";
import lessReducer from "./lessReducer";
import quizReducer from "./quizReducer";

const store = createStore(
  combineReducers({
    userReducer,
    lessReducer,
    lessonReducer,
    quizReducer
  }),
  applyMiddleware(promiseMiddleware())
);

export default store;
