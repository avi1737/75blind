import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  MenuItem,
  MenuList,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useEffect, useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import DataTable from "./DataTable";
import { Problem } from "../../types/Problem";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

function AccordionItem(props: { title: string; data: Problem[] }) {
  const { data, title } = props;
  const totalSolved = useSelector((state: RootState) => state.questions.st);

  function getSolvedInSection(): string {
    let cnt = 0;
    data.map((p) => {
      if (totalSolved.filter((id) => id === p.id).length > 0) cnt++;
    });

    let result = `(${cnt}/${data.length})`;
    return result;
  }

  function showOnProgess(): number {
    let cnt = 0;
    data.map((p) => {
      if (totalSolved.filter((id) => id === p.id).length > 0) cnt++;
    });

    let result = (cnt / data.length) * 100;
    return result;
  }

  return (
    <Accordion sx={{ paddingTop: "10px", paddingBottom: "10px" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Grid container sx={{ alignItems: "center" }}>
          <Grid lg={3} md={3} sm={2} item>
            <Typography sx={{ fontSize: "large", fontWeight: "bold" }}>
              {title}
            </Typography>
          </Grid>

          <Grid item lg={6} md={6} sm={8}>
            <LinearProgress
              variant="determinate"
              value={showOnProgess()}
              sx={{ height: "10px" }}
            />
          </Grid>

          <Grid item lg={3} md={3} sx={{ paddingLeft: "20px" }}>
            <Typography sx={{ fontSize: "small", fontWeight: "bold" }}>
              {getSolvedInSection()}
            </Typography>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <DataTable data={data} />
      </AccordionDetails>
    </Accordion>
  );
}

export default AccordionItem;
