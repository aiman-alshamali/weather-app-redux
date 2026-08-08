// import logo from "./logo.svg";
import "./App.css";
//REACT
import { useEffect, useState } from "react";

// MATERIAL UI
import {
  createTheme,
  ThemeProvider,
  Typography,
  Container,
  CircularProgress,
} from "@mui/material";
// import CircularProgress from '@mui/material/CircularProgress';

import Button from "@mui/material/Button";

//EXTERNAL LIBARARI
import moment from "moment";
import { useTranslation } from "react-i18next";
import "moment/locale/ar"; // Import Arabic locale file

// redux
import { fetchWeather, fetch } from "./features/weatherApi/weatherApiSlice";
import { useSelector, useDispatch } from "react-redux";

const theme = createTheme({
  typography: {
    fontFamily: ["marhey"],
  },
});

function App() {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather.weather);
  const isLoading = useSelector((state) => state.weather.isLoading);
  const { t, i18n } = useTranslation();
  const [locale, setLocale] = useState("ar");

  // HANDEL FUNCATION
  function transilationLanguage() {
    if (locale === "ar") {
      i18n.changeLanguage("en");
      moment.locale("en");
      setLocale("en");
    } else {
      i18n.changeLanguage("ar");
      moment.locale("ar");
      setLocale("ar");
    }
  }

  useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container maxWidth="sm" dir={locale === "ar" ? "rtl" : "ltr"}>
          {/* CONTAINER CONTENT */}
          <div className="container-content">
            {/* CARD */}
            <div className="card">
              {/* CARD CONTENT */}
              {isLoading ? (
                <CircularProgress />
              ) : (
                <div>
                  {/* CITY AND DATE */}
                  <div className="city-and-date">
                    <Typography variant="h2" style={{ fontWidth: "500" }}>
                      {t(weather.name)}
                    </Typography>
                    <Typography variant="h5">
                      {moment().format("DD / MM / YYYY - HH:mm")}
                    </Typography>
                  </div>
                  {/* === CITY AND DATE === */}
                  <hr />

                  {/* all */}
                  <div className="all">
                    {/* TEMPERATURE AND DESCRIPTION */}
                    <div>
                      {/* TEMPERATURE */}
                      <div>
                        <Typography variant="h1" style={{ textAlign: "right" }}>
                          {weather.temp}
                        </Typography>
                      </div>
                      {/* === TEMPERATURE === */}
                      {/* DESCRIPTION */}
                      <div>
                        <Typography variant="h5">
                          {t(weather.description)}
                        </Typography>
                        <div className="temp-max-and-min">
                          <h5>
                            {t("Max")} : {weather.max}
                          </h5>
                          <h5>
                            {t("Min")}: {weather.min}
                          </h5>
                        </div>
                      </div>
                      {/* === DESCRIPTION ===*/}
                    </div>
                    {/* === DEGREE AND DESCRIPTION === */}
                    {/* IMAGE WEATHER */}

                    <img
                      src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
                      alt="حالة الطقس"
                      style={{ width: "200px", height: "200px" }}
                    />
                    {/* === IMAGE WEATHER === */}
                  </div>
                  {/* === all === */}
                </div>
              )}

              {/* === CARD CONTENT === */}
            </div>
            {/* === CARD === */}
            {/* TRANSILATION BUTTON */}
            <div
              style={{
                width: "100%",
                marginTop: "20px",
                color: "white",
                display: "flex",
                justifyContent: "end",
              }}
            >
              <Button
                variant="text"
                style={{ color: "white" }}
                onClick={transilationLanguage}
              >
                {locale === "ar" ? "English" : "عربي"}
              </Button>
            </div>
            {/* === TRANSILATION BUTTON === */}
          </div>
          {/* === CONTAINER CONTENT === */}
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;

// useEffect(() => {
//     dispatch(fetchWeather());
//     const controller = new AbortController();
//     axios
//       .get(
//         "https://api.openweathermap.org/data/2.5/weather?lat=14.541&lon=49.1242&appid=6512bb97fd0837f470b3e09663dca097&lang=en",
//         {
//           signal: controller.signal,
//         },
//       )
//       .then((response) => {
//         const name = response.data.name;
//         const temp = Math.round(response.data.main.temp - 272.15);
//         const max = Math.round(response.data.main.temp_max - 272.15);
//         const min = Math.round(response.data.main.temp_min - 272.15);
//         const description = response.data.weather[0].description;
//         const icon = response.data.weather[0].icon;
//         setWeather({ name, temp, max, min, description, icon });
//       })
//       .catch((error) => {
//         console.error(error);
//       });

//     return () => {
//       controller.abort();
//     };
//   }, []);
