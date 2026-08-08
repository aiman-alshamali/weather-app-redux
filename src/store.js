import { configureStore } from "@reduxjs/toolkit";
import weatherApiReducer from "./features/weatherApi/weatherApiSlice";

export const store = configureStore({
  reducer: {
    weather: weatherApiReducer,
  },
});
