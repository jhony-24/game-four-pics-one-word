import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk";
import logger from "redux-logger";
import * as reducers from "src/redux";
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist";

const configStorage = {
	key : "root",
	storage,
	whitelist : [ "user" ]
}

const middlewares = applyMiddleware(thunk, logger);
const persistedReducer = persistReducer(configStorage,combineReducers(reducers)); 
const store = createStore(persistedReducer, middlewares);
const persistor = persistStore(store);

export {
	persistor
};
export default store;