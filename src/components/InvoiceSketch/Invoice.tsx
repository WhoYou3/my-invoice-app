import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { InvoiceType } from "../../Containers/Invoices/InvoiceType";
import { openDetail } from "../../store/features/isShowDetailSlice";
import "./invoice.css";
import InvoiceDetail from "../InvoiceDetail/InvoiceDetail";

interface Props {
  invoice: InvoiceType;
}

const Invoice = ({ invoice }: Props) => {
  const [isDetailPage, setIsDetailPage] = React.useState<boolean>(false);
  const isOpenDetail = useAppSelector(
    (state) => state.isOpenDetail.isShowDetail
  );

  const invoiceStatusClass = invoice.status;
  const dispatch = useAppDispatch();

  const resetState = () => {
    setIsDetailPage(false);
  };

  return (
    <>
      <div
        style={{ display: isOpenDetail ? "none" : "" }}
        onClick={() => {
          dispatch(openDetail());
          setIsDetailPage(true);
        }}
        className="invoice__invoice"
      >
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
              <span>{`$${invoice.cost.toFixed(2)}`}</span>
            </p>
          </div>
          <div
            className={`invoice__invoice-container_status ${invoiceStatusClass!.toLowerCase()}`}
          >
            <div />
            <p>
              <span>{invoice.status}</span>
            </p>
          </div>
        </div>
      </div>
      {isDetailPage && isOpenDetail ? (
        <InvoiceDetail onResetState={resetState} details={invoice} />
      ) : null}
    </>
  );
};

export default Invoice;
