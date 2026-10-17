// REDUX
import { useSelector, useDispatch } from "react-redux";
import { fetchWeather } from "../features/weatherApi/weatherApiSlice";

//REACT
import { useEffect } from "react";

// MATERIAL UI
import { Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CircularProgress from "@mui/material/CircularProgress";

import HourlyForecastCard from "./HourlyForecast";

export default function ContainerHourlyForecast() {
  const dispatch = useDispatch();
  const hourlyForecast = useSelector(
    (state) => state.weather.weather.hourlyForecast ?? [],
  );
  const hourlyForecastFor7 = hourlyForecast.slice(0, 7);

  const isLoading = useSelector((state) => state.weather.isLoading);

  console.log("==========================================================");
  useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);
  // console.log(hourlyForecast[0]);
  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div
          maxWidth="xl"
          style={{
            backgroundColor: "#ffff",
            padding: "5px",
          }}
        >
          <div style={{ display: "flex", gap: "5px", marginBottom: "20px" }}>
            <AccessTimeIcon />
            <Typography style={{ textAlign: "left" }}>
              Forecast for the Coming Hours
            </Typography>
          </div>

          <div
            style={{
              display: "flex",
              gap: "5px",
              justifyContent: "space-evenly",
            }}
          >
            {hourlyForecastFor7?.map((item) => (
              // <div key={item.dt}>
              //   <p>{item.main.temp}°</p>

              //   <img
              //     src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              //     alt={item.weather[0].description}
              //   />
              // </div>
              <HourlyForecastCard
                key={item.dt}
                date={item.dt}
                temp={item.main.temp}
                icon={item.weather[0].icon}
                humidity={item.main.humidity}
              />
            ))}
            {/* <HourlyForecastCard
              icon={weather.hourlyForecast?.[0]?.weather?.[0]?.icon}
              temp={weather.hourlyForecast?.[0]?.main?.temp}
              date={weather.hourlyForecast?.[0]?.dt}
            /> */}
            {/* <HourlyForecastCard />
        <HourlyForecastCard />
        <HourlyForecastCard />
        <HourlyForecastCard />
        <HourlyForecastCard />
        <HourlyForecastCard /> */}
          </div>
        </div>
      )}
    </>
  );
}
