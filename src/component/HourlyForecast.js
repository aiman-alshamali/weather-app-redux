//STYLE
import "../style/HourlyForecastCard.css";
// import { Card } from "@mui/material";
import { Typography } from "@mui/material";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";

export default function HourlyForecastCard({ icon, temp, date, humidity }) {
  const time = new Date(date * 1000).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
  return (
    <div className="card">
      <Typography variant="body2" style={{ marginBottom: "3px" }}>
        {time}
      </Typography>
      {/* <Icon fontSize="medium" style={{ color: "#5697de" }} /> */}
      {/* <WaterDropOutlinedIcon style={{ fontSize: "30px" }} /> */}
      {/* {icon && <icon fontSize="medium" style={{ color: "#00070d" }} />} */}
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weather"
        style={{
          width: "40px",
          height: "40px",
          // backgroundColor: "white",
        }}
      />
      <Typography style={{ fontWeight: "bold" }}>{Math.round(temp)}</Typography>
      <div
        style={{
          marginTop: "0px",
          display: "flex",
          // flexDirection: "column",
          justifyContent: "center",
          // alignItems: "center",
          gap: "2px",
        }}
      >
        <Typography style={{ fontSize: "12px" }}>
          {Math.round(humidity)}%{/* 10% */}
        </Typography>
        <WaterDropOutlinedIcon style={{ fontSize: "15px" }} />
      </div>
    </div>
  );
}
