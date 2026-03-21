import axios from "axios"
import {applyMiddleware, compose, createStore} from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from "redux-thunk";

import {rootReducer} from "./root-reducer";
import * as api from "../config"

const persistConfig = {
  key: 'root',
  storage,
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk.withExtraArgument({
  client: axios,
  api,
}))));
const persistor = persistStore(store)

export {store, persistor}