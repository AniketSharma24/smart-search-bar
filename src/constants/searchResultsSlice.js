import { createSlice } from '@reduxjs/toolkit';

const searchResultsSlice = createSlice({
  name: 'searchResults',
  initialState: {},
  reducers: {
    addResult: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { addResult } = searchResultsSlice.actions;

export default searchResultsSlice.reducer;
