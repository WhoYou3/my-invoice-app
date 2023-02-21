import { createSlice } from "@reduxjs/toolkit";

export interface toggleModeStatus {
  isDark: boolean;
}

const initialState: toggleModeStatus = {
  isDark: false,
};

export const ToggleModeSlice = createSlice({
  name: "toggleMode",
  initialState: initialState,
  reducers: {
    toggleMode: (state) => {
      state.isDark = !state.isDark;
      console.log(state.isDark);
    },
  },
});

export default ToggleModeSlice.reducer;
export const { toggleMode } = ToggleModeSlice.actions;
