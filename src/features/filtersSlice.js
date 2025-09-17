// features/filter/filterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchTerm: '',
  // Add other filter criteria here, e.g., category: 'all'
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    // Add reducers for other filter criteria
  },
});

export const { setSearchTerm } = filterSlice.actions;
export default filterSlice.reducer;