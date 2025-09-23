   import { configureStore } from '@reduxjs/toolkit';
    import productReducer from "../features//productSlice"
    import cartSlice from "../features/cartSlice"
    import detailSlice from "../features/detailReducer";
    import storage from 'redux-persist/lib/storage'
    import { persistReducer } from 'redux-persist';
    import {combineReducers} from 'redux'
   import filterReducer  from '../features/filtersSlice'
   import authReducer  from '../features/auth/authSlice'
   import categoryReducer from '../features/category/categorySlice';
import { version } from 'react';



    const persistConfig={
      key:"root",
      version:1,
      storage,
    }

    const reducer = combineReducers({
        auth: authReducer,
        products: productReducer,
        cart : cartSlice,
         product: detailSlice,
         filter: filterReducer,
         categories:categoryReducer,
    })
   const persistedReducer = persistReducer(persistConfig,reducer)

    const store = configureStore({
      reducer: persistedReducer
    });

    export default store