import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase-config";
import { InvoiceType } from "./InvoiceType";
import { collection, onSnapshot, QuerySnapshot } from "firebase/firestore";
import { Invoice, InvoiceNavigation } from "../../components/index";
import "./Invoices.css";

const Invoices = () => {
  const [invoices, setInvoices] = useState<InvoiceType[]>([]);

  useEffect(() => {
    const invoicesCollectionRef = collection(db, "Invoices");

    const unsubscribe = onSnapshot(
      invoicesCollectionRef,
      (querySnapshot: QuerySnapshot) => {
        const invoicesArray = querySnapshot.docs.map((singleInvoice) => ({
          ...singleInvoice.data(),
          id: singleInvoice.id,
        })) as InvoiceType[];
        setInvoices(invoicesArray);
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);
  console.log(invoices);
  const invoicesLength = invoices.length;

  return (
    <div className="invoices__invoices-container">
      <InvoiceNavigation length={invoicesLength} />
      {invoices.map((invoice) => (
        <Invoice key={invoice.id} invoice={invoice} />
      ))}
    </div>
  );
};

export default Invoices;
