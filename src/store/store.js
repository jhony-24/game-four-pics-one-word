import { createStore, combineReducers, applyMiddleware } from "redux"
import logger from "redux-logger"
import * as reducers from "src/redux/reducers"
import sagas from "src/redux/sagas"
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist"
import createSagaMiddleware from "redux-saga"

// Store config to persist reducers
const configStorage = {
	key: "root",
	storage,
	whitelist: ["user"],
}

// all middlewares
const sagaMiddleware = createSagaMiddleware()
const middlewares = applyMiddleware(sagaMiddleware, logger)

// reducers and stores
const persistedReducer = persistReducer(
	configStorage,
	combineReducers(reducers)
)
const store = createStore(persistedReducer, middlewares)
const persistor = persistStore(store)

sagaMiddleware.run(sagas)

export { persistor }
export default store
