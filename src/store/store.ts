import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { TypedUseSelectorHook } from "react-redux/es/types";
import { ToggleModeSlice } from "./features/toggleModeleSlice";
import { IsAddingNewInvoiceSlice } from "./features/isAddingNewInvoiceSlice";

export const store = configureStore({
  reducer: {
    toggle: ToggleModeSlice.reducer,
    isAdding: IsAddingNewInvoiceSlice.reducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
