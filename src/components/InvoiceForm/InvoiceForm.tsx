import React from "react";
import "./invoiceForm.css";

const InvoiceForm = () => {
  return (
    <form className="invoiceForm__form">
      <div className="invoiceForm__form-container">
        <p>
          <span>Bill From</span>
        </p>
        <label htmlFor="street">Street Addres</label>
        <input id="street" value="19 Union Terrace"></input>
        <label htmlFor="city">City</label>
        <input id="city" value="London"></input>
        <label htmlFor="postcode">Post Code</label>
        <input id="postcode" value="E1 3EZ"></input>
        <label htmlFor="counry">Country</label>
        <input id="country" value="United Kingdom"></input>
      </div>
      <div>
        <p>
          <span>Bill to</span>
        </p>
      </div>
    </form>
  );
};

export default InvoiceForm;
