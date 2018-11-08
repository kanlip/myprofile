import { createStore, combineReducers, applyMiddleware } from "redux";
import promise from "redux-promise";
import { reducer as formReducer } from "redux-form";
import WorkReducer from "./reducers/workReducer";

export default createStore(
  combineReducers({ works: WorkReducer, form: formReducer }),
  {},
  applyMiddleware(promise)
);
