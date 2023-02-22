import React from "react";
import { InvoiceType } from "../../Containers/Invoices/InvoiceType";
import "./invoice.css";

interface Props {
  invoice: InvoiceType;
}

const Invoice = ({ invoice }: Props) => {
  return (
    <div className="invoice__invoice">
      <div className="invoice__invoice-header">
        <p>
          <span>#{invoice.id.slice(0, 6).toUpperCase()}</span>
        </p>
        <p>{invoice.clientName}</p>
      </div>
      <div className="invoice__invoice-container">
        <div className="invoice__invoice-container_data">
          <p>Due 19 Aug 2021</p>
          <p>
            <span>$1,800.90</span>
          </p>
        </div>
        <div className="invoice__invoice-container_status">
          <div />
          <p>
            <span>PAID</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
