// src/features/products/productSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as productAPI from './productAPI';

// Thunks

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, thunkAPI) => {
    try {
      const response = await productAPI.fetchProductsAPI();
      return response.data;  // assuming your API returns array of products
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const fetchProduct = createAsyncThunk(
  'products/fetchProduct',
  async (id, thunkAPI) => {
    try {
      const response = await productAPI.fetchProductByIdAPI(id);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const addProduct = createAsyncThunk(
  'products/addProduct',
  async (product, thunkAPI) => {
    try {
      const response = await productAPI.createProductAPI(product);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const updateProduct = createAsyncThunk(
  'products/updateProduct',
  async ({ id, updatedFields }, thunkAPI) => {
    try {
      const response = await productAPI.updateProductAPI(id, updatedFields);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (id, thunkAPI) => {
    try {
      await productAPI.deleteProductAPI(id);
      return id;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Slice

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    currentProduct: null,  // for editing / viewing one
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
    // optional non-async actions
    clearCurrentProduct(state) {
      state.currentProduct = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // fetch all products
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })

      // fetch one product
      .addCase(fetchProduct.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentProduct = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })

      // add product
      .addCase(addProduct.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items.push(action.payload);
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })

      // update product
      .addCase(updateProduct.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const updated = action.payload;
        const index = state.items.findIndex(p => p.id === updated.id);
        if (index !== -1) {
          state.items[index] = updated;
        }
        // if currentProduct is the one updated, update that too
        if (state.currentProduct && state.currentProduct.id === updated.id) {
          state.currentProduct = updated;
        }
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })

      // delete product
      .addCase(deleteProduct.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const id = action.payload;
        state.items = state.items.filter(p => p.id !== id);
        // clear currentProduct if it was deleted
        if (state.currentProduct && state.currentProduct.id === id) {
          state.currentProduct = null;
        }
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  }
});

export const { clearCurrentProduct } = productSlice.actions;

export default productSlice.reducer;




// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// const initialState = {
//     products:[],
//     status:'idle',
//     error: null
// }


// export const fetchProducts = createAsyncThunk('products/fetchProducts', async()=>{
//     const response = await fetch('https://fakestoreapi.com/products')
//     const data = await response.json()
//     return data
// })


// const productSlice = createSlice({
//     name: 'products',
//     initialState,
//     reducers:{},
//     extraReducers:(builder)=>{
//         builder.addCase(fetchProducts.pending, (state)=>{
//             state.status = 'loading'
//         })
//         .addCase(fetchProducts.fulfilled, (state, action)=>{
//             state.status = "succeeded"
//             state.products = action.payload
//         })
//         .addCase(fetchProducts.rejected, (state, action)=>{
//             state.status = "failed"
//             state.error = action.error.message
//         })
//     }
// })

// export default productSlice.reducer 