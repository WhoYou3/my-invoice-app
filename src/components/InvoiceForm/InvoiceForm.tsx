import React from "react";
import { useState } from "react";

import "./invoiceForm.css";

const InvoiceForm: React.FC = () => {
  const [items, setItems] = useState<String[]>([]);
  const addNewItemField = () => {
    setItems((prevItems) => [...prevItems, "element"]);
  };

  return (
    <>
      <form className="invoiceForm__form">
        <div className="invoiceForm__form-container">
          <p>
            <span>Bill From</span>
          </p>
          <label htmlFor="street">Street Addres</label>
          <input id="street" value="19 Union Terrace" disabled></input>

          <label htmlFor="city">City</label>
          <input id="city" value="London" disabled></input>
          <label htmlFor="postcode">Post Code</label>
          <input id="postcode" value="E1 3EZ" disabled></input>

          <label htmlFor="counry">Country</label>
          <input id="country" disabled value="United Kingdom"></input>
        </div>
        <div className="invoiceForm__form-container">
          <p>
            <span>Bill To</span>
          </p>
          <label htmlFor="name">Client's Name</label>
          <input id="name" placeholder="Alex Grim"></input>
          <label htmlFor="street">Street Addres</label>
          <input id="street" placeholder="Downtown 18"></input>

          <label htmlFor="city">City</label>
          <input id="city" placeholder="Manchester"></input>
          <label htmlFor="postcode">Post Code</label>
          <input id="postcode" placeholder="E1 E25"></input>

          <label htmlFor="counry">Country</label>
          <input id="country" placeholder="United Kingdom"></input>
          <label htmlFor="invoiceDate">Invoice date</label>
          <input id="invoiceDate" type="date"></input>
          <label htmlFor="PaymentTerms">Payment Terms</label>
          <select id="PaymentTerms">
            <option value="">Choose Payment Terms</option>
            <option value="option1">30 days</option>
            <option value="option2">14 days</option>
            <option value="option3">7 days</option>
          </select>
          <label htmlFor="ProjectDescription">Project / Description</label>
          <input id="ProjectDescription" placeholder="Graphic Design"></input>
        </div>
        <div className="invoiceForm__form-container">
          <p>
            <span>Item List</span>
          </p>

          <ul className="invoiceForm__form-container_items">
            {items.map((item) => (
              <>
                <li>
                  <label htmlFor="ItemName">Item Name</label>
                  <input
                    type="text"
                    id="itemName"
                    placeholder="Banner Design etc."
                  />
                  <div className="invoiceForm__form-container_item">
                    <div>
                      <label htmlFor="quantity">Qty.</label>
                      <input id="quantity" placeholder="1.."></input>
                    </div>
                    <div>
                      <label htmlFor="price">Price</label>
                      <input type="number" placeholder="156" />
                    </div>
                    <div>
                      <label>Value</label>
                      <input value="156" disabled />
                    </div>
                  </div>
                </li>
              </>
            ))}
            {/* <div>
              <label htmlFor="quantity">Qty.</label>
              <input id="quantity" placeholder="1.."></input>
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <input type="number" placeholder="156" />
            </div>
            <div>
              <label>Value</label>
              <input value="156" disabled />
            </div> */}
          </ul>

          <button
            type="button"
            onClick={addNewItemField}
            className="invoiceForm__form-button"
          >
            +Add New Item
          </button>
        </div>
        <div className="invoiceForm__form-button_container">
          <button className="invoiceForm__form-button">Discard</button>
          <button
            style={{ background: "#373B53", color: "white" }}
            className="invoiceForm__form-button"
          >
            Save as Draft
          </button>
          <button
            style={{ background: "#7C5DFA", color: "white" }}
            className="invoiceForm__form-button"
          >
            Save & Send
          </button>
        </div>
      </form>
    </>
  );
};

export default InvoiceForm;
