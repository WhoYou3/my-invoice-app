import { createSlice } from "@reduxjs/toolkit";

export interface isDetail {
  isShowDetail: boolean;
}

const initialState: isDetail = {
  isShowDetail: false,
};

export const IsOpeningDetailCard = createSlice({
  name: "isShowDetail",
  initialState: initialState,
  reducers: {
    openDetail: (state) => {
      state.isShowDetail = true;
    },
    closeDetail: (state) => {
      state.isShowDetail = false;
    },
  },
});

export default IsOpeningDetailCard.reducer;
export const { openDetail, closeDetail } = IsOpeningDetailCard.actions;
