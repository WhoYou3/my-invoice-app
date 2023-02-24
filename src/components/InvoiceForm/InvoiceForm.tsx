import React from "react";
import { useState } from "react";
import { iconDelete } from "../../assets";

import "./invoiceForm.css";

interface Item {
  [key: string]: string | number;
  itemName: string;
  quantity: number;
  price: number;
}

export interface FormValues {
  name: string;
  email: string;
  street: string;
  city: string;
  postCode: string;
  date: string;
  country: string;
  projectDescription: string;
  paymentTerm: string;
  invoiceItems: Item[];
}

const InvoiceForm: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [formData, setFormData] = useState<FormValues>({
    name: "",
    email: "",
    city: "",
    street: "",
    date: "",
    postCode: "",
    country: "",
    projectDescription: "",
    paymentTerm: "",
    invoiceItems: items,
  });

  const handleAddItemsField = () => {
    const itemsCopy: Item[] = [...items];
    itemsCopy.push({ itemName: "", quantity: 0, price: 0 });
    setItems(itemsCopy);
  };

  const handleItemsInputsValues = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const itemsCopy = [...items];
    itemsCopy[index][event.target.name] = event.target.value;
    setItems(itemsCopy);
  };

  const handleDeleteItemField = (index: number): void => {
    const itemsCopy = [...items];
    itemsCopy.splice(index, 1);
    setItems(itemsCopy);
  };

  const handleSaveInvoice = async () => {
    setFormData({ ...formData, invoiceItems: items });
  };
  console.log(formData);

  const renderItemsList = () => {
    return items.map((item, index) => {
      return (
        <li key={index}>
          <label htmlFor={`itemName${index}`}>Item Name</label>
          <input
            onChange={(event) => handleItemsInputsValues(index, event)}
            name="itemName"
            type="text"
            id={`itemName${index}`}
            placeholder="Banner Design etc."
          />
          <div className="invoiceForm__form-container_item">
            <div>
              <label htmlFor={`quantity${index}`}>Qty.</label>
              <input
                onChange={(event) => handleItemsInputsValues(index, event)}
                type="number"
                name="quantity"
                id={`quantity${index}`}
                placeholder="1.."
              ></input>
            </div>
            <div>
              <label htmlFor={`price${index}`}>Price</label>
              <input
                onChange={(event) => handleItemsInputsValues(index, event)}
                name="price"
                type="number"
                placeholder="156"
                id={`price${index}`}
              />
            </div>
            <div>
              <label>Value</label>
              <input value={item.price * item.quantity} disabled />
            </div>
            <div className="invoiceForm__form-img">
              <img
                onClick={() => handleDeleteItemField(index)}
                src={iconDelete}
                alt="delete-icon"
              ></img>
            </div>
          </div>
        </li>
      );
    });
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

          <label htmlFor="country">Country</label>
          <input id="country" disabled value="United Kingdom"></input>
        </div>
        <div className="invoiceForm__form-container">
          <p>
            <span>Bill To</span>
          </p>
          <label htmlFor="name">Client's Name</label>
          <input
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            id="name"
            placeholder="Alex Grim"
          ></input>
          <label htmlFor="street">Street Addres</label>
          <input
            onChange={(e) =>
              setFormData({ ...formData, street: e.target.value })
            }
            id="street"
            placeholder="Downtown 18"
          ></input>

          <label htmlFor="city">City</label>
          <input
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            id="city"
            placeholder="Manchester"
          ></input>
          <label htmlFor="postcode">Post Code</label>
          <input id="postcode" placeholder="E1 E25"></input>

          <label htmlFor="counry">Country</label>
          <input
            onChange={(e) =>
              setFormData({ ...formData, country: e.target.value })
            }
            id="country"
            placeholder="United Kingdom"
          ></input>
          <label htmlFor="invoiceDate">Invoice date</label>
          <input
            onChange={(e) => {
              const date = new Date(e.target.value);
              const formattedDate = date.toLocaleDateString("en-US", {
                weekday: "short",
                day: "numeric",
                month: "short",
                year: "numeric",
              });
              setFormData({
                ...formData,
                date: formattedDate.replaceAll(/,/g, ""),
              });
            }}
            id="invoiceDate"
            type="date"
          ></input>
          <label htmlFor="PaymentTerms">Payment Terms</label>
          <select
            onChange={(e) =>
              setFormData({ ...formData, paymentTerm: e.target.value })
            }
            id="PaymentTerms"
          >
            <option value="">Choose Payment Terms</option>
            <option value="option1">30 days</option>
            <option value="option2">14 days</option>
            <option value="option3">7 days</option>
          </select>
          <label htmlFor="ProjectDescription">Project / Description</label>
          <input
            onChange={(e) =>
              setFormData({ ...formData, projectDescription: e.target.value })
            }
            id="ProjectDescription"
            placeholder="Graphic Design"
          ></input>
        </div>
        <div className="invoiceForm__form-container">
          <p>
            <span>Item List</span>
          </p>

          <ul className="invoiceForm__form-container_items">
            {renderItemsList()}
          </ul>

          <button
            type="button"
            onClick={handleAddItemsField}
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
            type="button"
            onClick={handleSaveInvoice}
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
