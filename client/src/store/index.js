import { configureStore } from '@reduxjs/toolkit';

// Example empty slice (we'll add real slices soon)
const rootReducer = {};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
