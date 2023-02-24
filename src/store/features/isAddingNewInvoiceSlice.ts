import { createSlice } from "@reduxjs/toolkit";

export interface addNewInvoice {
  isAdding: boolean;
}

const initialState: addNewInvoice = {
  isAdding: false,
};

export const IsAddingNewInvoiceSlice = createSlice({
  name: "isAddingNewInvoice",
  initialState: initialState,
  reducers: {
    openAddForm: (state) => {
      state.isAdding = true;
    },
    closeAddForm: (state) => {
      state.isAdding = false;
    },
  },
});

export default IsAddingNewInvoiceSlice.reducer;
export const { openAddForm, closeAddForm } = IsAddingNewInvoiceSlice.actions;
