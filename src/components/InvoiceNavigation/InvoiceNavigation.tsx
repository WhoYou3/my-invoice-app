import { useAppDispatch } from "../../store/store";
import { openAddForm } from "../../store/features/isAddingNewInvoiceSlice";
import { iconPlus, iconArrowDown } from "../../assets";
import "./invoiceNavigation.css";

interface props {
  length: number;
}

const InvoiceNavigation: React.FC<props> = ({ length }) => {
  const dispatch = useAppDispatch();

  const openInvoiceForm = () => {
    dispatch(openAddForm());
  };

  return (
    <div className="invoices__invoice-navigation">
      <div className="invoices__invoice-navigation_title">
        <h3>Invoices</h3>
        <p>{length} invoices</p>
      </div>
      <div className="invoices__invoice-navigation_container">
        <div className="invoices__invoice-navigation_filter">
          <p>
            <span>Filter</span>
          </p>
          <img src={iconArrowDown} alt="arrow down" />
        </div>
        <div
          onClick={openInvoiceForm}
          className="invoices__invoice-navigation_add"
        >
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
