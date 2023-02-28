import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  closeAddForm,
  closeEditForm,
} from "../../store/features/IsAddingUpdatingInvoiceSlice";
import { closeDetail } from "../../store/features/isShowDetailSlice";
import { iconArrowLeft } from "../../assets";
import "./backlink.css";

interface props {
  onResetState?: any;
}

const BackLink: React.FC<props> = (props) => {
  const isOpenEdit = useAppSelector(
    (state) => state.isAddingOrUpdating.isEditing
  );

  const dispatch = useAppDispatch();
  const closeActions = () => {
    dispatch(closeAddForm());
    if (isOpenEdit) {
      dispatch(closeEditForm());
      return;
    }
    props.onResetState();
    dispatch(closeDetail());
  };

  return (
    <div onClick={closeActions} className="backlink">
      <img src={iconArrowLeft} alt="arrow-left" />
      <p>Go back</p>
    </div>
  );
};

export default BackLink;
