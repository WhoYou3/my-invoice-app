import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { openAddForm } from "../../store/features/IsAddingUpdatingInvoiceSlice";
import { iconPlus, iconArrowDown } from "../../assets";
import { filterStatusValue } from "../../store/features/filterInvoices";
import "./invoiceNavigation.css";

interface props {
  length: number;
}

const InvoiceNavigation: React.FC<props> = ({ length }) => {
  const [isFilterBox, setIsFilterBox] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const dispatch = useAppDispatch();
  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = event.target.value;
    if (event.target.checked) {
      setSelectedOption(value);
    } else {
      setSelectedOption("");
    }
  };

  useEffect(() => {
    dispatch(filterStatusValue(selectedOption));
  }, [selectedOption]);

  const isOpenDetail = useAppSelector(
    (state) => state.isOpenDetail.isShowDetail
  );

  const openInvoiceForm = () => {
    dispatch(openAddForm());
  };

  return (
    <div
      style={{ display: isOpenDetail ? "none" : "" }}
      className="invoices__invoice-navigation"
    >
      <div className="invoices__invoice-navigation_title">
        <h3>Invoices</h3>
        <p>{length} invoices</p>
      </div>
      <div className="invoices__invoice-navigation_container">
        <div className="invoices__invoice-navigation_filter">
          {!isFilterBox ? (
            <div className="invoices__invoice-navigation_filter-options">
              <div>
                <input
                  checked={selectedOption === "PAID"}
                  onChange={handleCheckboxChange}
                  type="checkbox"
                  value="PAID"
                />
                <label>PAID</label>
              </div>
              <div>
                <input
                  checked={selectedOption === "PENDING"}
                  onChange={handleCheckboxChange}
                  type="checkbox"
                  value="PENDING"
                />
                <label>PENDING</label>
              </div>
              <div>
                <input
                  checked={selectedOption === "DRAFT"}
                  onChange={handleCheckboxChange}
                  type="checkbox"
                  value="DRAFT"
                />
                <label>DRAFT</label>
              </div>
            </div>
          ) : null}
          <div onClick={() => setIsFilterBox((prev) => !prev)}>
            <p>
              <span>Filter</span>
            </p>

            <img
              className={isFilterBox ? "" : "animate"}
              src={iconArrowDown}
              alt="arrow down"
            />
          </div>
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
