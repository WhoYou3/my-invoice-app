import React from "react";
import BackLink from "../Backer/BackLink";
import { useAppDispatch } from "../../store/store";
import { InvoiceType } from "../../Containers/Invoices/InvoiceType";

import { openEditForm } from "../../store/features/IsAddingUpdatingInvoiceSlice";
import "./InvoiceDetail.css";

interface Props {
  details: InvoiceType;
  onResetState: Function;
}

const InvoiceDetail: React.FC<Props> = ({ details, onResetState }) => {
  const dispatch = useAppDispatch();

  const date = new Date(details.date);

  date.setDate(date.getDate() + Number(details.paymentTerm));

  const payDay = date.toLocaleDateString("en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <>
      <div className="invoiceDetail">
        <BackLink onResetState={onResetState} />
        <div className="invoiceDetail__status">
          <p>Status</p>

          <p>
            <span>{details.status}</span>
          </p>
        </div>
        <div className="invoiceDetail__container">
          <div className="invoiceDetail__container-header">
            <div className="invoiceDetail__container-header_title">
              <p>
                <span>#{details.id.slice(0, 6).toUpperCase()}</span>
              </p>
              <p>{details.projectDescription}</p>
            </div>
            <div className="invoiceDetail__container-header_addres">
              <p>19 Union Terrace</p>
              <p>London</p>
              <p>E1 3Ez</p>
              <p>United Kingdom</p>
            </div>
          </div>
          <div className="invoiceDetail__container-description">
            <div className="invoiceDetail__container-description_date">
              <div>
                <p>Invoice Date</p>
                <p>
                  <span>{details.date}</span>
                </p>
              </div>
              <div>
                <p>Payment Due</p>
                <p>
                  <span>{payDay.replaceAll(/,/g, "")}</span>
                </p>
              </div>
            </div>
            <div className="invoiceDetail__container-description_recipient">
              <div>
                <p>Bill to</p>
              </div>
              <div>
                <p>
                  <span>{details.name}</span>
                </p>
              </div>
              <div>
                <p>{details.street}</p>
                <p>{details.city}</p>
                <p>{details.postCode}</p>
                <p>{details.country}</p>
              </div>
            </div>
            <div className="invoiceDetail__container-email">
              <p>Sent to</p>
              <p>
                <span>{details.email}</span>
              </p>
            </div>
          </div>
          <div className="invoiceDetail__conteiner-summary">
            <div className="invoiceDetail__container-summary_itemsbox">
              <div>
                <p>
                  <span>Item Name</span>
                </p>
                <p>
                  <span>Quantity</span>
                </p>
                <p>
                  <span>Prize</span>
                </p>
                <p>
                  <span>Total</span>
                </p>
              </div>
              {details.invoiceItems.map((invoice) => (
                <div key={invoice.itemName}>
                  <p>
                    <span>{invoice.itemName}</span>
                  </p>
                  <p>{`${invoice.quantity}x`}</p>
                  <p>{invoice.price}</p>
                  <p>
                    <span>${`${invoice.quantity * invoice.price}`}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="invoiceDetail__container-summary_result">
            <p>Amout due</p>
            <p>
              <span>${details.cost}</span>
            </p>
          </div>
        </div>
        <div className="invoiceDetail__container-buttons">
          <button
            onClick={() => {
              dispatch(openEditForm());
            }}
            style={{ width: "60px", background: "#252945" }}
          >
            Edit
          </button>
          <button style={{ width: "79px", background: "#EC5757" }}>
            Delete
          </button>
          <button style={{ width: "90px", background: "#7C5DFA" }}>
            Mark as Paid
          </button>
        </div>
      </div>
    </>
  );
};

export default InvoiceDetail;
