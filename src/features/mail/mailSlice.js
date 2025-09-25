// src/features/products/productSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as mailAPI from './mailApi';

// Thunks


export const addMail = createAsyncThunk(
  'mails/addMail',
  async (mail, thunkAPI) => {
    try {
      const response = await mailAPI.createMailAPI(mail);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);


// Slice

const mailSlice = createSlice({
  name: 'mails',
  initialState: {
    mails: [],
    //currentMail: null,  // for editing / viewing one
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      
      // add mail
      .addCase(addMail.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(addMail.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.mails.push(action.payload);
      })
      .addCase(addMail.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })

  }
});

// export const { clearCurrentCategory } = categorySlice.actions;

export default mailSlice.reducer;
