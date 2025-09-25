// src/features/products/productSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as categoryAPI from './categoryApi';

// Thunks

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async (_, thunkAPI) => {
    try {
      const response = await productAPI.fetchCategoriesAPI();
      return response.data;  // assuming your API returns array of products
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const fetchCategory = createAsyncThunk(
  'categories/fetchCategory',
  async (id, thunkAPI) => {
    try {
      const response = await categoryAPI.fetchCategoryByIdAPI(id);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const addCategory = createAsyncThunk(
  'categories/addCatgeory',
  async (category, thunkAPI) => {
    try {
      const response = await categoryAPI.createCategoryAPI(category);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const updateCategory = createAsyncThunk(
  'categories/updateCategory',
  async ({ id, updatedFields }, thunkAPI) => {
    try {
      const response = await categoryAPI.updateCategoryAPI(id, updatedFields);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const deleteCategory = createAsyncThunk(
  'categories/deleteCategory',
  async (id, thunkAPI) => {
    try {
      await categoryAPI.deleteCategoryAPI(id);
      return id;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Slice

const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    currentCategory: null,  // for editing / viewing one
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
    // optional non-async actions
    clearCurrentCategory(state) {
      state.currentCategory = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // fetch all products
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })

      // fetch one product
      .addCase(fetchCategory.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentCategory = action.payload;
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })

      // add product
      .addCase(addCategory.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.categories.push(action.payload);
      })
      .addCase(addCategory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })

      // update Category
      .addCase(updateCategory.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const updated = action.payload;
        const index = state.categories.findIndex(p => p.id === updated.id);
        if (index !== -1) {
          state.categories[index] = updated;
        }
        // if currentCategory is the one updated, update that too
        if (state.currentCategory && state.currentCategory.id === updated.id) {
          state.currentCategory = updated;
        }
      })
      .addCase(updateCategory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })

      // delete Category
      .addCase(deleteCategory.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const id = action.payload;
        state.categories = state.categories.filter(p => p.id !== id);
        // clear currentCategory if it was deleted
        if (state.currentCategory && state.currentCategory.id === id) {
          state.currentCategory = null;
        }
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  }
});

export const { clearCurrentCategory } = categorySlice.actions;

export default categorySlice.reducer;
