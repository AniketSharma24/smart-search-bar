import { configureStore } from '@reduxjs/toolkit';
import searchResultsSlice from './searchResultsSlice';

const store = configureStore({
  reducer: {
    searchResults: searchResultsSlice,
  },
});

export default store;
