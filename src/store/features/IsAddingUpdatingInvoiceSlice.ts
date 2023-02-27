import { createSlice } from "@reduxjs/toolkit";

export interface addNewInvoice {
  isAdding: boolean;
  isEditing: boolean;
}

const initialState: addNewInvoice = {
  isAdding: false,
  isEditing: false,
};

export const IsAddingUpdatingInvoiceSlice = createSlice({
  name: "isAddingNewInvoice",
  initialState: initialState,
  reducers: {
    openAddForm: (state) => {
      state.isAdding = true;
    },
    closeAddForm: (state) => {
      state.isAdding = false;
    },
    openEditForm: (state) => {
      state.isEditing = true;
    },
    closeEditForm: (state) => {
      state.isEditing = false;
    },
  },
});

export default IsAddingUpdatingInvoiceSlice.reducer;
export const { openAddForm, closeAddForm, openEditForm, closeEditForm } =
  IsAddingUpdatingInvoiceSlice.actions;
