import "./invoiceNavigation.css";
import { iconPlus, iconArrowDown } from "../../assets";

const InvoiceNavigation = () => {
  return (
    <div className="invoices__invoice-navigation">
      <div className="invoices__invoice-navigation_title">
        <h3>Invoices</h3>
        <p>7 invoices</p>
      </div>
      <div className="invoices__invoice-navigation_container">
        <div className="invoices__invoice-navigation_filter">
          <p>
            <span>Filter</span>
          </p>
          <img src={iconArrowDown} alt="arrow down" />
        </div>
        <div className="invoices__invoice-navigation_add">
          <div>
            <img src={iconPlus} alt="icon-plus" />
          </div>
          <p>
            <span>New</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceNavigation;
