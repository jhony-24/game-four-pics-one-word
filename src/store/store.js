import { createStore, combineReducers, compose, applyMiddleware } from "redux"
import logger from "redux-logger"
import * as reducers from "src/redux/reducers"
import sagas from "src/redux/sagas"
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist"
import createSagaMiddleware from "redux-saga"
import { clientWindow } from "src/resources/tools/functions"

// Store config to persist reducers
const configStorage = {
	key: "root",
	storage,
	whitelist: [""],
}

const modeDevelopment = process.env.NODE_ENV === "dev";

// devtools
const enhanceMiddleware = modeDevelopment ?	(
	clientWindow(false) ? compose : ( clientWindow().__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
	trace : true
	}) || compose )
) : compose;

// all middlewares
const sagaMiddleware = createSagaMiddleware()

let middleware = [ sagaMiddleware ];
if(modeDevelopment) {
	middleware = [ ...middleware, logger ];
}
const createMiddlewares = enhanceMiddleware(applyMiddleware(...middleware))

// reducers and stores
const persistedReducer = persistReducer(configStorage,combineReducers(reducers));
const store = createStore(persistedReducer, createMiddlewares)
const persistor = persistStore(store)

sagaMiddleware.run(sagas)

export { persistor }
export default store
