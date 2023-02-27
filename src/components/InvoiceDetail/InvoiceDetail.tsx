import React from "react";
import BackLink from "../Backer/BackLink";
import "./InvoiceDetail.css";

const InvoiceDetail = () => {
  return (
    <>
      <div className="invoiceDetail">
        <BackLink />
        <div className="invoiceDetail__status">
          <p>Status</p>
          <p>
            <span>pending</span>
          </p>
        </div>
        <div className="invoiceDetail__container">
          <div className="invoiceDetail__container-header">
            <div className="invoiceDetail__container-header_title">
              <p>
                <span>#XM9141</span>
              </p>
              <p>Graphic Design</p>
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
                  <span>21 Aug 2021</span>
                </p>
              </div>
              <div>
                <p>Payment Due</p>
                <p>
                  <span>20 Sep 2021</span>
                </p>
              </div>
            </div>
            <div className="invoiceDetail__container-description_recipient">
              <div>
                <p>Bill to</p>
              </div>
              <div>
                <p>
                  <span>Alex Grim</span>
                </p>
              </div>
              <div>
                <p>84 Church Way</p>
                <p>Bradford</p>
                <p>BDI 99B</p>
                <p>United Kingdom</p>
              </div>
            </div>
            <div className="invoiceDetail__container-email">
              <p>Sent to</p>
              <p>
                <span>alexgrim@mail.com</span>
              </p>
            </div>
          </div>
          <div className="invoiceDetail__conteiner-summary">
            <div className="invoiceDetail__container-summary_itemsbox">
              <p>
                <span>Banner Design</span>
              </p>
              <div>
                <p>1 x $300.00</p>
                <p>
                  <span>$300</span>
                </p>
              </div>
            </div>
          </div>
          <div className="invoiceDetail__container-summary_result">
            <p>Amout due</p>
            <p>
              <span>$600</span>
            </p>
          </div>
        </div>
        <div className="invoiceDetail__container-buttons">
          <button style={{ width: "60px", background: "#252945" }}>Edit</button>
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
