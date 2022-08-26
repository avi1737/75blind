import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { MenuItem, MenuList } from "@mui/material";
import { indigo } from "@mui/material/colors";
import SwitchButton from "../SwitchButton";

const NavigationMenu = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        height: "55px",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: {
              md: "flex",
              justifyContent: "space-around",
            },
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
              fontSize: "20px",
              color: indigo[500],
            }}
          >
            SDE Prep
          </Typography>
          <MenuList>
            <MenuItem>
              <SwitchButton />
            </MenuItem>
          </MenuList>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavigationMenu;
