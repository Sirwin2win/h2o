import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const getProduct = createAsyncThunk("getProduct", async () => {
//   const data = await fetch("https://fakestoreapi.com/products");
//   return data.json();
// });

export const getProductById = createAsyncThunk("getProductById", async (id) => {
  const data = await fetch(`https://fakestoreapi.com/products/${id}`);
  return data.json();
});

const detailSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    data: 0,
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getProductById.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getProductById.rejected, (state, action) => {
      state.error = true;
    });
   
   
  },
});
export default detailSlice.reducer;