import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../Features/weatherFeature';

export const store = configureStore({
  reducer: {
    weather: weatherReducer
  }
});
