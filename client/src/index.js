// client/src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import feedReducer from './slices/feedSlice';
import App from './App'; // Import your main App component

// Configure the Redux store
const store = configureStore({
  reducer: {
    feed: feedReducer,
  },
});

// Create a root for rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
