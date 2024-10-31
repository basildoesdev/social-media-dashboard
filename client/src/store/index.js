import { configureStore } from '@reduxjs/toolkit';
import feedReducer from './slices/feedSlice';

// Example empty slice (we'll add real slices soon)
const rootReducer = {};

const store = configureStore({
    reducer: {
      feed: feedReducer,
    },
  });

export default store;
