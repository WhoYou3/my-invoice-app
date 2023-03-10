import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { TypedUseSelectorHook } from "react-redux/es/types";
import { ToggleModeSlice } from "./features/toggleModeleSlice";
import { IsAddingUpdatingInvoiceSlice } from "./features/IsAddingUpdatingInvoiceSlice";
import { IsOpeningDetailCard } from "./features/isShowDetailSlice";
import { FilterInvoicesStatus } from "./features/filterInvoices";

export const store = configureStore({
  reducer: {
    toggle: ToggleModeSlice.reducer,
    isAddingOrUpdating: IsAddingUpdatingInvoiceSlice.reducer,
    isOpenDetail: IsOpeningDetailCard.reducer,
    filterValue: FilterInvoicesStatus.reducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
