// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import feedReducer from '../slices/feedSlice.js';
import App from './App'; // Adjust this import based on your file structure

// Configure the Redux store
const store = configureStore({
  reducer: {
    feed: feedReducer,
  },
});

// Render the app wrapped with the Redux Provider
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
