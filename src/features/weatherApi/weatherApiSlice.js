// redux
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//EXTERNAL LIBARARI
import axios from "axios";

export const fetchWeather = createAsyncThunk(
  "weatherApi/fetchWeather",
  async () => {
    console.log("calling fetch weather");
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather?lat=14.541&lon=49.1242&appid=6512bb97fd0837f470b3e09663dca097&lang=en",
    );
    const name = response.data.name;
    const temp = Math.round(response.data.main.temp - 272.15);
    const max = Math.round(response.data.main.temp_max - 272.15);
    const min = Math.round(response.data.main.temp_min - 272.15);
    const description = response.data.weather[0].description;
    const icon = response.data.weather[0].icon;

    return { name, temp, max, min, description, icon };
  },
);

const initialState = {
  result: "empty",
  weather: {},
  isLoading: false,
};

const weatherApiSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        console.log("============");
        console.log(state);
        state.isLoading = false;
        state.weather = action.payload;
      });
  },
});

export default weatherApiSlice.reducer;
