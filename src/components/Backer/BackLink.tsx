import React from "react";
import { useAppDispatch } from "../../store/store";
import { closeAddForm } from "../../store/features/isAddingNewInvoiceSlice";
import { iconArrowLeft } from "../../assets";
import "./backlink.css";

const BackLink: React.FC = () => {
  const dispatch = useAppDispatch();
  const closeAction = () => {
    dispatch(closeAddForm());
  };

  return (
    <div onClick={closeAction} className="backlink">
      <img src={iconArrowLeft} alt="arrow-left" />
      <p>Go back</p>
    </div>
  );
};

export default BackLink;
