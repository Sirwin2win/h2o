   import { configureStore } from '@reduxjs/toolkit';
    import productSlice from "../features//productSlice"
    import cartSlice from "../features/cartSlice"
    import detailSlice from "../features/detailReducer";
    import storage from 'redux-persist/lib/storage'
    import { persistReducer } from 'redux-persist';
    import {combineReducers} from 'redux'
   import filterReducer  from '../features/filtersSlice'
import { version } from 'react';



    const persistConfig={
      key:"root",
      version:1,
      storage,
    }

    const reducer = combineReducers({
        products: productSlice,
        cart : cartSlice,
         product: detailSlice,
         filter: filterReducer,
    })
   const persistedReducer = persistReducer(persistConfig,reducer)

    const store = configureStore({
      reducer: persistedReducer
    });

    export default store