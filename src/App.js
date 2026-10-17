// import logo from "./logo.svg";
import "./style/App.css";
//REACT
import { useEffect, useState } from "react";

// MATERIAL UI
import { createTheme, ThemeProvider, Container, Grid } from "@mui/material";

//COMPONENTS
import WeatherCard from "./component/WeatherCard";
import ContainerDetails from "./component/Details";
import ContainerHourlyForecast from "./component/ContainerHourlyForecastCard";
import ContainerDailyForecast from "./component/ContainerDailyForecast";
import InputSearsh from "./component/InputSearsh";
import Navbar from "./component/Navbar";

// REDUX
import { fetchWeather, fetch } from "./features/weatherApi/weatherApiSlice";
import { useSelector, useDispatch } from "react-redux";

const theme = createTheme({
  typography: {
    fontFamily: ["marhey"],
  },
  a: {
    fontFamily: ["marhey"],
  },
});

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
        <Container
          maxWidth="lg"
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid container spacing={2}>
            <Grid size={6}>
              <WeatherCard />
            </Grid>
            <Grid size={6}>
              <InputSearsh />
              <ContainerHourlyForecast />
              <ContainerDailyForecast />
              <ContainerDetails />
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
