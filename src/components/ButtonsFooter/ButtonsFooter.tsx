import React from "react";
import { useAppDispatch } from "../../store/store";
import { closeAddForm } from "../../store/features/IsAddingUpdatingInvoiceSlice";
import "./buttonsFooter.css";

interface props {
  onSave: any;
  isValid: boolean;
}

const ButtonsFooter: React.FC<props> = (props) => {
  const dispatch = useAppDispatch();
  return (
    <div className="invoiceForm__form-button_container">
      <button
        onClick={() => dispatch(closeAddForm())}
        className="invoiceForm__form-button"
      >
        Discard
      </button>
      <button
        style={{ background: "#373B53", color: "white" }}
        className="invoiceForm__form-button"
        onClick={() => props.onSave("DRAFT")}
        disabled={!props.isValid}
      >
        Save as Draft
      </button>
      <button
        onClick={() => props.onSave("PENDING")}
        style={{ background: "#7C5DFA", color: "white" }}
        className="invoiceForm__form-button"
        disabled={!props.isValid}
      >
        Save & Send
      </button>
    </div>
  );
};

export default ButtonsFooter;
