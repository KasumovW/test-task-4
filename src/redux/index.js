import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger/src";
import { users } from "./reducer/users";
import { auth } from "./reducer/auth";

const logger = createLogger({
  dif: true,
  collapsed: true,
});

export const store = createStore(
  combineReducers({ users, auth }),
  applyMiddleware(thunk, logger)
);
