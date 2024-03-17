import { legacy_createStore, compose, combineReducers, applyMiddleware } from "redux";
import {thunk} from "redux-thunk"
import reducer from "./reducer";
const rootReducer = combineReducers({
    todo: reducer,
  });
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
