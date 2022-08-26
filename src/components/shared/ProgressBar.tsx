import React from "react";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/system";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Typography, Box } from "@mui/material";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 12,
  borderRadius: 8,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor:
      theme.palette.mode === "light" ? theme.palette.primary : "#308fe8",
  },
}));

function ProgressBar() {
  const solvedTotal = useSelector((state: RootState) => state.questions.st);

  const showOnProgess = (solvedTotal.length / 73) * 100;

  return (
    <Box>
      <Typography
        variant="body2"
        color="text.secondary"
        fontSize={20}
        paddingBottom={5}
      >
        Your Progress {`${Math.round(showOnProgess)}%`}
      </Typography>
      <BorderLinearProgress
        variant="determinate"
        value={showOnProgess}
        sx={{ marginBottom: "50px" }}
      />
    </Box>
  );
}

export default ProgressBar;
