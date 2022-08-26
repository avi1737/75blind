import { createSlice } from "@reduxjs/toolkit";

type Layout = {
  mode: string;
};

const initialState: Layout = {
  mode: "light",
};

const layoutSlice = createSlice({
  name: "layout",
  initialState: initialState,
  reducers: {
    switchMode(state) {
      if (state.mode === "light") {
        state.mode = "dark";
      } else {
        state.mode = "light";
      }
    },
  },
});

export const { switchMode } = layoutSlice.actions;
export const layoutReducer = layoutSlice.reducer;
