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
        <p>
          <span>{invoice.name}</span>
        </p>
      </div>
      <div className="invoice__invoice-container">
        <div className="invoice__invoice-container_data">
          <p>{invoice.date}</p>
          <p>
            <span>{`$${invoice.cost}`}</span>
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
