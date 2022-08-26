import {
  Autocomplete,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

function Filter() {
  const dispatch = useDispatch();

  const [easy, setEasy] = useState(false);
  const [medium, setMedium] = useState(false);
  const [hard, setHard] = useState(false);

  // const handleEasy = () => {
  //   setEasy(!easy);
  //   dispatch(filterUsingDifficulty("Easy"));
  // };

  // const handleMedium = () => {
  //   setMedium(!medium);
  //   dispatch(filterUsingDifficulty("Medium"));
  // };

  // const handleHard = () => {
  //   setHard(!hard);
  //   dispatch(filterUsingDifficulty("Hard"));
  // };

  return (
    <Grid
      container
      sx={{
        marginBottom: "50px",
        justifyContent: "center",
        alignItems: "center",
        margin: "50px 0px",
      }}
    >
      <Grid item md={4} xs={12}>
        <FormGroup sx={{ display: "block" }}>
          <FormControlLabel
            control={<Checkbox color="primary" checked={easy} />}
            label="Easy"
          />
          <FormControlLabel
            control={<Checkbox color="primary" checked={medium} />}
            label="Medium"
          />
          <FormControlLabel
            control={<Checkbox color="primary" checked={hard} />}
            label="Hard"
          />
        </FormGroup>
      </Grid>
      <Grid item md={4} xs={12}>
        <Autocomplete
          multiple
          id="tags-standard"
          options={["Arrays", "Linked List", "stack", "Queues"]}
          getOptionLabel={(option) => option}
          defaultValue={[]}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label="Search by question tags"
            />
          )}
        />
      </Grid>
    </Grid>
  );
}

export default Filter;
