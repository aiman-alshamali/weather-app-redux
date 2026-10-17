import { Typography } from "@mui/material";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import DailyForecast from "./DailyForecast";
import { useSelector } from "react-redux";

export default function ContainerDailyForecast() {
  const weather = useSelector((state) => state.weather.weather);

  console.log("hourlyForecast:", weather.hourlyForecast);
  console.log("length:", weather.hourlyForecast?.length);
  let dailyForecast = [];

  dailyForecast = weather.hourlyForecast?.filter((_, index) => index % 8 === 0);
  console.log(dailyForecast);
  return (
    <div
      maxWidth="xl"
      style={{
        backgroundColor: "#ffff",
        padding: "5px",
      }}
    >
      <div style={{ display: "flex", gap: "5px", marginBottom: "20px" }}>
        <CalendarMonthOutlinedIcon />
        <Typography style={{ textAlign: "left" }}>
          Forecast for the Coming Days
        </Typography>
      </div>

      <div
        style={{ display: "flex", gap: "5px", justifyContent: "space-evenly" }}
      >
        {dailyForecast?.map((item) => (
          <DailyForecast
            key={item.dt}
            icon={item.weather[0].icon}
            temp={item.main.temp}
            date={item.dt}
            description={item.weather[0].description}
          />
        ))}
      </div>
    </div>
  );
}
