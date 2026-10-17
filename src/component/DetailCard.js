import "../style/DetailCard.css";

// MATERIAL UI
import { Typography } from "@mui/material";

export default function DetailCard({ icon: Icon, title, value }) {
  return (
    <div className="DetailCard">
      {/* ICON */}
      {/* <Icon fontSize="medium" style={{ color: "#5697de" }} /> */}
      {Icon && <Icon fontSize="medium" style={{ color: "#5697de" }} />}
      {/* ==== ICON ==== */}

      {/* DATA  */}
      <div>
        <Typography variant="h6" style={{ color: "black", fontSize: "0.8rem" }}>
          {title}
        </Typography>
        <Typography variant="h6" style={{ fontSize: "1rem" }}>
          {value}
        </Typography>
      </div>
      {/* ==== DATA ==== */}
    </div>
  );
}
