//STYLE
import "../style/WeatherCard.css";

import { useTranslation } from "react-i18next";
import { useEffect } from "react";

// MATERIAL UI
import { Typography, Container, CircularProgress } from "@mui/material";
// import Button from "@mui/material/Button";
// import CircularProgress from '@mui/material/CircularProgress';
//EXTERNAL LIBARARI
import moment from "moment";

// REDUX
import { fetchWeather } from "../features/weatherApi/weatherApiSlice";
// import { fetchWeather, fetch } from "../features/weatherApi/weatherApiSlice";
import { useSelector, useDispatch } from "react-redux";

export default function WeatherCard({ locale }) {
  const isLoading = useSelector((state) => state.weather.isLoading);

  const weather = useSelector((state) => state.weather.weather);
  const { t } = useTranslation();
  // const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  moment.locale("en");

  useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);

  return (
    <div
      className="weather-container"
      // dir={locale === "ar" ? "rtl" : "ltr"}
      style={{}}
    >
      {/* CARD */}
      <div className="cardd">
        {/* CARD CONTENT */}
        {isLoading ? (
          <CircularProgress />
        ) : (
          <div
            style={{
              backgroundImage: `url("https://weawow.com/ar/p/ohz0C7WEdM1176049")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "300px",
            }}
          >
            {/* LOCATION AND TIME */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <Typography>{weather.name}</Typography>
              <Typography>
                {moment().format("LT") + "  : Last Updat"}
              </Typography>
            </div>
            {/*==== LOCATION AND TIME ==== */}

            {/* TEMPERATURE AND ICON */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                // gap: "5px",
              }}
            >
              <Typography
                variant="h1"
                // style={{ backgroundColor: "yellowgreen" }}
              >
                {weather.temp}
                <sup>°</sup>
              </Typography>
              <img
                src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
                alt="حالة الطقس"
                style={{
                  width: "150px",
                  height: "150px",
                  // backgroundColor: "white",
                }}
              />
            </div>
            {/* ==== TEMPERATURE AND ICON ==== */}
            {/* DESCRIPTION */}
            <Typography
              variant="h4"
              style={{
                textAlign: "left",
                // backgroundColor: "red",
              }}
            >
              {t(weather.description)}
            </Typography>
            {/* ==== DESCRIPTION ==== */}
          </div>
          //{=== CARD CONTENT === }
        )}
      </div>
      {/* === CARD === */}
    </div>
  );
}

// {
/* cards */
// }
// <div className="temp-max-and-min">
//   <h5>
//     {t("Max")} : {weather.max}
//   </h5>
//   <h5>
//     {t("Min")}: {weather.min}
//   </h5>
// </div>
// {
/* ===  cards ==== */
// }

// {/* <Container maxWidth="sm" dir={locale === "ar" ? "rtl" : "ltr"}>
//       {/* CONTAINER CONTENT */}
//       <div className="container-content">
//         {/* CARD */}
//         <div className="card">
//           {/* CARD CONTENT */}
//           {isLoading ? (
//             <CircularProgress />
//           ) : (
//             <div>
//               {/* CITY AND DATE */}
//               <div className="city-and-date">
//                 <Typography variant="h2" style={{ fontWidth: "500" }}>
//                   {t(weather.name)}
//                 </Typography>
//                 <Typography variant="h5">{moment().calendar()}</Typography>
//               </div>
//               {/* === CITY AND DATE === */}
//               <hr />

//               {/* all */}
//               <div className="all">
//                 {/* TEMPERATURE AND DESCRIPTION */}
//                 <div>
//                   {/* TEMPERATURE */}
//                   <div>
//                     <Typography variant="h2" style={{ textAlign: "right" }}>
//                       {weather.temp + "°"}
//                     </Typography>
//                   </div>
//                   {/* === TEMPERATURE === */}
//                   {/* DESCRIPTION */}
//                   <div>
//                     <Typography variant="h5">
//                       {t(weather.description)}
//                     </Typography>
//                     <div className="temp-max-and-min">
//                       <h5>
//                         {t("Max")} : {weather.max}
//                       </h5>
//                       <h5>
//                         {t("Min")}: {weather.min}
//                       </h5>
//                     </div>
//                   </div>
//                   {/* === DESCRIPTION ===*/}
//                 </div>
//                 {/* === DEGREE AND DESCRIPTION === */}
//                 {/* IMAGE WEATHER */}

//                 <img
//                   src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
//                   alt="حالة الطقس"
//                   style={{ width: "200px", height: "200px" }}
//                 />
//                 {/* === IMAGE WEATHER === */}
//               </div>
//               {/* === all === */}
//             </div>
//           )}

//           {/* === CARD CONTENT === */}
//         </div>
//         {/* === CARD === */}
//       </div>
//       {/* === CONTAINER CONTENT === */}
//     </Container> */}

// {/* TRANSILATION BUTTON */}
//       <div
//         style={{
//           width: "100%",
//           marginTop: "20px",
//           color: "white",
//           display: "flex",
//           justifyContent: "end",
//         }}
//       >
//         <Button
//           variant="text"
//           style={{ color: "white" }}
//           onClick={transilationLanguage}
//         >
//           {locale === "ar" ? "English" : "عربي"}
//         </Button>
//       </div>
//       {/* === TRANSILATION BUTTON === */}
