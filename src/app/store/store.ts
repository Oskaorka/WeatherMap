import { configureStore, combineReducers } from "@reduxjs/toolkit";
import weatherReducer from "../store/weatherData";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({ weather: weatherReducer });
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RooteState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);
export function createStore() {
  return store;
}
