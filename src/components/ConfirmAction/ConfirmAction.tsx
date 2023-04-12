import React from "react";
import { useAppDispatch } from "../../store/store";
import { closeDetail } from "../../store/features/isShowDetailSlice";
import "./ConfirmAction.css";

interface props {
  confirmHandler?: any;
  title: string;
  description: string;
  buttonName: string;
  buttonAction?: any;
}

const ConfirmAction: React.FC<props> = ({
  confirmHandler,
  title,
  description,
  buttonName,
  buttonAction,
}) => {
  const dispatch = useAppDispatch();

  const closeConfirm = () => {
    confirmHandler();
  };

  const confirmButton = () => {
    confirmHandler();
    buttonAction();
    dispatch(closeDetail());
  };
  return (
    <div className="confirm__container">
      <div className="confirm__container-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="confirm__container-content_buttons">
          <button onClick={closeConfirm}>Cancel</button>
          <button onClick={confirmButton}>{buttonName}</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmAction;
