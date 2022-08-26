import { Typography, useTheme } from "@mui/material";
import React from "react";

function Heading(props: { title: string }) {
  const theme = useTheme();

  return (
    <Typography
      sx={{
        color: theme.palette.primary.main,
        textAlign: "center",
        fontSize: "33px",
        fontWeight: "bold",
      }}
    >
      {props.title}
    </Typography>
  );
}

export default Heading;
