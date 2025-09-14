   import { configureStore } from '@reduxjs/toolkit';
    // import { api } from '../features/apiSlice';
    import productSlice from "../features//productSlice"
    import cartSlice from "../features/cartSlice"
    import detailSlice from "../features/detailReducer";

    const store = configureStore({
      reducer: {
        // [api.reducerPath]: api.reducer,
        products: productSlice,
        cart : cartSlice,
         product: detailSlice,
      },
      // middleware: (getDefaultMiddleware) =>
      //   getDefaultMiddleware().concat(api.middleware),
    });

    export default store