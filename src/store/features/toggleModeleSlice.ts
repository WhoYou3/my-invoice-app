import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";

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
    toggleMode: (state, action: PayloadAction<boolean>) => {
      state.isDark = !action.payload;
    },
  },
});

export default ToggleModeSlice.reducer;
export const { toggleMode } = ToggleModeSlice.actions;
