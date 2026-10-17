import "../style/HourlyForecastCard.css";

import { Typography } from "@mui/material";
// import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";

const descriptions = {
  "clear sky": "Clear",
  "few clouds": "Few clouds",
  "scattered clouds": "Cloudy",
  "broken clouds": "Cloudy",
  "overcast clouds": "Cloudy",
  "light rain": "Rain",
  "moderate rain": "Rain",
  "heavy intensity rain": "Rain",
  thunderstorm: "Storm",
  snow: "Snow",
  mist: "Mist",
};

export default function DailyForecast({ date, temp, icon, description }) {
  const shortDescription = descriptions[description] || description;
  const dateObject = new Date(date * 1000);

  const day = dateObject.toLocaleDateString("en-US", {
    weekday: "short",
  });

  const monthAndDayNumber = dateObject.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
  return (
    <div className="card">
      <Typography
        variant="h6"
        style={{ marginBottom: "1px", fontSize: "15px" }}
      >
        {day}
      </Typography>
      <p style={{ marginBottom: "2px", margin: "0" }}>{monthAndDayNumber}</p>
      {/* <Icon fontSize="medium" style={{ color: "#5697de" }} /> */}
      {/* <WaterDropOutlinedIcon style={{ fontSize: "30px" }} /> */}
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weather"
        style={{
          width: "40px",
          height: "40px",
        }}
      />
      <Typography style={{ fontSize: "12px" }}>{Math.round(temp)}°</Typography>

      <Typography style={{ fontSize: "14px" }}>{shortDescription}</Typography>
    </div>
  );
}
