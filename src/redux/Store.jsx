import {
  configureStore,
  combineReducers
} from "@reduxjs/toolkit";

import authReducer from "./authSlice";
import mathReducer from "./mathSlice"

import {
  persistStore,
  persistReducer
} from "redux-persist";

/* Custom Storage */
const storage = {

  getItem: (key) => {
    return Promise.resolve(
      localStorage.getItem(key)
    );
  },

  setItem: (key, value) => {

    localStorage.setItem(key, value);

    return Promise.resolve(true);
  },

  removeItem: (key) => {

    localStorage.removeItem(key);

    return Promise.resolve();
  },
};

/* Combine Reducers */
const rootReducer = combineReducers({

  auth: authReducer,
  math: mathReducer,

});

/* Persist Config */
const persistConfig = {

  key: "root",

  storage,

  whitelist: ["auth"],
  blacklist: ["math"]
};

/* Persist Reducer */
const persistedReducer = persistReducer(
  persistConfig,
  rootReducer
);

/* Store */
export const store = configureStore({

  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>

    getDefaultMiddleware({

      serializableCheck: {

        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/FLUSH",
          "persist/REGISTER"
        ]
      }
    })
});

/* Persistor */
export const persistor = persistStore(store);