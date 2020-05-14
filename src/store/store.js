import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk";
import logger from "redux-logger";
import * as reducers from "src/redux";

const allReducers = combineReducers(reducers);

const middlewares = applyMiddleware(thunk, logger);

export default createStore(allReducers, middlewares);
