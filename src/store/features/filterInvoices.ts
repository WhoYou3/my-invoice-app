import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface filterInvoices {
  filterStatus: string | null;
}

const initialState: filterInvoices = {
  filterStatus: "",
};

export const FilterInvoicesStatus = createSlice({
  name: "filter-invoice",
  initialState: initialState,
  reducers: {
    filterStatusValue: (state, action: PayloadAction<string | null>) => {
      state.filterStatus = action.payload;
    },
  },
});

export default FilterInvoicesStatus.reducer;
export const { filterStatusValue } = FilterInvoicesStatus.actions;
