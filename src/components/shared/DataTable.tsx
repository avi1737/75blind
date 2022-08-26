import React from "react";
import {
  Button,
  Checkbox,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Problem } from "../../types/Problem";

import { markQuestionChecked } from "../../redux/problemSlice";

function DataTable(props: { data: Problem[] }) {
  // const problems = useSelector((state: RootState) => state.questions.questions);
  const dispatch = useDispatch();
  const theme = useTheme();
  const status = useSelector((state: RootState) => state.questions.st);

  const { data } = props;

  const getProblemDiffculty = (type: string) => {
    if (type === "Medium") {
      return <Chip label="Medium" color="success" size="small" />;
    }

    if (type === "Hard") {
      return <Chip label="Hard" color="error" size="small" />;
    }

    if (type === "Easy") {
      return <Chip label="Easy" color="info" size="small" />;
    }
  };

  const handleQuestionDone = (id: number) => {
    dispatch(markQuestionChecked(id));
  };

  const getLink = (item: Problem) => {
    return item.leetCode;
  };

  return (
    <TableContainer>
      <Table sx={{ minWidth: 700 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bold", textAlign: "center" }}>
              Completed
            </TableCell>
            <TableCell style={{ fontWeight: "bold", textAlign: "center" }}>
              Problem
            </TableCell>
            <TableCell style={{ fontWeight: "bold", textAlign: "center" }}>
              Difficulty
            </TableCell>
            <TableCell style={{ fontWeight: "bold", textAlign: "center" }}>
              Leetcode
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.length > 0 &&
            data.map((item: Problem) => (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center" width={10}>
                  <Checkbox
                    sx={{ color: theme.palette.primary.main }}
                    checked={status.includes(item.id)}
                    onChange={() => handleQuestionDone(item.id)}
                  ></Checkbox>
                </TableCell>

                <TableCell
                  component="th"
                  scope="row"
                  align="center"
                  sx={{
                    fontSize: "14px",
                    fontWeight: "700",
                    color: theme.palette.primary.main,
                  }}
                  width={80}
                >
                  {item.question}
                </TableCell>

                <TableCell align="center" width={20}>
                  {getProblemDiffculty(item.difficulty)}
                </TableCell>

                <TableCell align="center" width={30}>
                  <Button
                    variant="contained"
                    sx={{
                      background: theme.palette.primary.main,
                      textDecoration: "none",
                    }}
                  >
                    <a
                      href={getLink(item)}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "#fff", textDecoration: "none" }}
                    >
                      Go to Leetcode
                    </a>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DataTable;
