import React from "react";
import BackLink from "../../components/Backer/BackLink";
import InvoiceForm from "../../components/InvoiceForm/InvoiceForm";
import "./invoiceMaker.css";
const InvoiceMaker = () => {
  return (
    <div className="invoiceMaker">
      <BackLink />
      <h2>New Invoice</h2>
      <InvoiceForm />
    </div>
  );
};

export default InvoiceMaker;
