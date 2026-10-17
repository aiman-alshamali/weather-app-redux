import "../style/ContainerDetails.css";

//HOOK
import { useEffect } from "react";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import { fetchWeather } from "../features/weatherApi/weatherApiSlice";

// MATERIAL UI
import { Container, Grid, Typography } from "@mui/material";
import AirIcon from "@mui/icons-material/Air";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import SpeedIcon from "@mui/icons-material/Speed";
//COMPONENT
import DetailCard from "./DetailCard";

export default function ContainerDetails() {
  const weather = useSelector((state) => state.weather.weather);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);

  return (
    <>
      <Container className="ContainerDetails" maxWidth="xl">
        <Typography style={{ margin: "15px 0", textAlign: "left" }}>
          Details Weather
        </Typography>
        <Grid container>
          <Grid size={4}>
            <div>
              <DetailCard
                icon={WaterDropOutlinedIcon}
                title="Humidity"
                value={`${weather.humidity} %`}
              />
              <DetailCard
                icon={VisibilityIcon}
                title="Visibility"
                value={`${weather.visibility} km`}
              />
            </div>
          </Grid>
          <Grid size={4}>
            <div>
              <DetailCard
                icon={AirIcon}
                title="Wind Speed"
                value={`${weather.windSpeed} km/h`}
              />
              <DetailCard
                icon={SpeedIcon}
                title="Pressure"
                value={`${weather.Pressure} hPa`}
              />
            </div>
          </Grid>
          <Grid size={4}>
            <div>
              <DetailCard
                icon={AirIcon}
                title="Wind Gust"
                value={`${weather.windGust} km/h`}
              />
              <DetailCard
                icon={CloudOutlinedIcon}
                title="Cloudiness"
                value={`${weather.cloudIcon} %`}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
