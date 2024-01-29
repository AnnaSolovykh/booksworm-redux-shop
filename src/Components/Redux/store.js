import { configureStore, combineReducers } from "@reduxjs/toolkit";
import books from './booksSlice';
import cart from './cartSlice';
import favorites from './favoritesSlice'

import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['favorites'],
}

const rootReducer = combineReducers(
    {
      cart,
      books,
      favorites
    }
  )
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore( {
    reducer: 
        persistedReducer,
        middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
}
)

export const persistor = persistStore(store) 