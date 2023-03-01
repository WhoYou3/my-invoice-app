import React, { useState } from "react";
import BackLink from "../Backer/BackLink";
import { InvoiceType } from "../../Containers/Invoices/InvoiceType";
import { db } from "../../firebase/firebase-config";
import { updateDoc, doc, deleteDoc } from "firebase/firestore";
import "./InvoiceDetail.css";
import ConfirmAction from "../ConfirmAction/ConfirmAction";

interface Props {
  details: InvoiceType;
  onResetState: () => void;
}

const InvoiceDetail: React.FC<Props> = ({ details, onResetState }) => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showMarkConfirm, setShowMarkConfirm] = useState(false);

  const date = new Date(details.date);

  date.setDate(date.getDate() + Number(details.paymentTerm));

  const payDay = date.toLocaleDateString("en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const deleteInvoice = async (id: string) => {
    const invoicesDoc = doc(db, "Invoices", id);
    await deleteDoc(invoicesDoc);
  };

  const markAsPaid = async (id: string) => {
    const invoicesDoc = doc(db, "Invoices", id);
    const newStatus = { status: "PAID" };
    await updateDoc(invoicesDoc, newStatus);
  };

  const closeConfirm = () => {
    setShowDeleteConfirm(false);
    setShowMarkConfirm(false);
  };

  const descriptionDelete = `are you sure you want to delate invoice ${details.id
    .slice(0, 6)
    .toUpperCase()}? This action cannot be
  undone`;

  const descriptionMarkasPaid = `are you sure you want to mark as paid invoice ${details.id
    .slice(0, 6)
    .toUpperCase()}? This action cannot be
  undone`;

  return (
    <>
      <div className="invoiceDetail">
        <BackLink onResetState={onResetState} />
        <div className="invoiceDetail__status">
          <p>Status</p>

          <div
            className={`invoice__invoice-container_status ${details.status!.toLowerCase()}`}
          >
            <div />
            <p>
              <span>{details.status}</span>
            </p>
          </div>
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
                  <span>Qty.</span>
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
            onClick={() => setShowDeleteConfirm(true)}
            style={{ width: "79px", background: "#EC5757" }}
          >
            Delete
          </button>
          <button
            onClick={() => setShowMarkConfirm(true)}
            style={{ width: "90px", background: "#7C5DFA" }}
          >
            Mark as Paid
          </button>
        </div>
      </div>
      {showDeleteConfirm ? (
        <>
          <ConfirmAction
            description={descriptionDelete}
            title="Confirm Deletion"
            confirmHandler={closeConfirm}
            buttonName="Delete"
            buttonAction={() => deleteInvoice(details.id)}
          />
        </>
      ) : null}
      {showMarkConfirm ? (
        <ConfirmAction
          description={descriptionMarkasPaid}
          title="Confirm Mark as Paid"
          confirmHandler={closeConfirm}
          buttonName="Mark as Paid"
          buttonAction={() => markAsPaid(details.id)}
        />
      ) : null}
    </>
  );
};

export default InvoiceDetail;
