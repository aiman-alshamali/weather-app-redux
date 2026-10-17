// import logo from "./logo.svg";
import "./style/App.css";
//REACT
import { useEffect, useState } from "react";

// MATERIAL UI
import { createTheme, ThemeProvider, Container, Grid } from "@mui/material";

//EXTERNAL LIBARARI
import moment from "moment";
import { useTranslation } from "react-i18next";
import "moment/locale/ar"; // Import Arabic locale file

//COMPONENTS
import WeatherCard from "./component/WeatherCard";
import DetailCard from "./component/DetailCard";
import ContainerDetails from "./component/Details";
import HourlyForecastCard from "./component/HourlyForecast";
import ContainerHourlyForecast from "./component/ContainerHourlyForecastCard";
import DailyForecast from "./component/DailyForecast";
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
  // const dispatch = useDispatch();
  // const { t, i18n } = useTranslation();
  // const [locale, setLocale] = useState("ar");

  // HANDEL FUNCATION
  // function transilationLanguage() {
  //   if (locale === "ar") {
  //     i18n.changeLanguage("en");
  //     moment.locale("en");
  //     setLocale("en");
  //   } else {
  //     i18n.changeLanguage("ar");
  //     moment.locale("ar");
  //     setLocale("ar");
  //   }
  // }
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
