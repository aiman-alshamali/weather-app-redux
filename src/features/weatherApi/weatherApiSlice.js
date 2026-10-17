// redux
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//EXTERNAL LIBARARI
import axios from "axios";

export const fetchWeather = createAsyncThunk(
  "weatherApi/fetchWeather",
  async () => {
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather?lat=14.541&lon=49.1242&appid=6512bb97fd0837f470b3e09663dca097&lang=en",
    );

    const responseHourlyForecast = await axios.get(
      // "https://api.openweathermap.org/data/2.5/forecast?lat=14.541&lon=49.1242&appid=6512bb97fd0837f470b3e09663dca097&units=metric&lang=en",
      "https://api.openweathermap.org/data/2.5/forecast?lat=14.541&lon=49.1242&units=metric&lang=en&appid=6512bb97fd0837f470b3e09663dca097",
    );

    //     const responseHourlyForecast = await axios.get(
    //   "https://api.openweathermap.org/data/2.5/forecast",
    //   {
    //     params: {
    //       lat: 14.541,
    //       lon: 49.1242,
    //       units: "metric",
    //       lang: "en",
    //       appid: process.env.REACT_APP_WEATHER_API_KEY,
    //     },
    //   }
    // );

    const name = response.data.name;
    const temp = Math.round(response.data.main.temp - 272.15);
    // const max = Math.round(response.data.main.temp_max - 272.15);
    // const min = Math.round(response.data.main.temp_min - 272.15);
    const description = response.data.weather[0].description;
    const icon = response.data.weather[0].icon;

    const humidity = response.data.main.humidity;
    const cloudIcon = response.data.clouds.all;
    const Pressure = response.data.main.pressure;
    // const windGust = Math.round(response.data.wind.gust * 3.6);
    const windSpeed = Math.round(response.data.wind.speed * 3.6);
    const visibility = response.data.visibility / 1000;
    const windGust = response.data.wind.gust
      ? Math.round(response.data.wind.gust * 3.6)
      : 0;
    // const hourlyForecast = responseHourlyForecast.data.list.slice(0, 7);
    const hourlyForecast = responseHourlyForecast.data.list;
    return {
      name,
      temp,
      description,
      icon,
      Pressure,
      windSpeed,
      visibility,
      humidity,
      cloudIcon,
      windGust,
      hourlyForecast,
    };
  },
);

const initialState = {
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
        state.isLoading = false;
        state.weather = action.payload;
      });
  },
});

export default weatherApiSlice.reducer;
