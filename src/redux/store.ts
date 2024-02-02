import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authStateReducer } from "./Auth/AuthSlice";

// auth persist config
const authPersistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["email"],
};

const rootReduser = combineReducers({
  // redusers
  auth: persistReducer(authPersistConfig, authStateReducer),
});

export const store = configureStore({
  reducer: rootReduser,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
