import React from "react";
import { useAppDispatch } from "../../store/store";
import { closeAddForm } from "../../store/features/IsAddingUpdatingInvoiceSlice";
import { closeDetail } from "../../store/features/isShowDetailSlice";
import { iconArrowLeft } from "../../assets";
import "./backlink.css";

interface props {
  onResetState?: (() => void) | undefined;
}

const BackLink: React.FC<props> = (props) => {
  const dispatch = useAppDispatch();
  const closeActions = () => {
    dispatch(closeAddForm());
    if (props.onResetState) {
      props.onResetState();
    }
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
