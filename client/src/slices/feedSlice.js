// src/slices/feedSlice.js
import { createSlice } from '@reduxjs/toolkit';

const feedSlice = createSlice({
  name: 'feed',
  initialState: [],
  reducers: {
    addPost(state, action) {
      state.push(action.payload); // Adds a new post to the feed
    },
    // Add other reducers as needed
  },
});

// Export the actions to use them in components
export const { addPost } = feedSlice.actions;

// Export the reducer to be included in the store
export default feedSlice.reducer;
