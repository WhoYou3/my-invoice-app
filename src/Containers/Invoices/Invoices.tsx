import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase-config";
import { InvoiceType } from "./InvoiceType";
import { collection, getDocs, CollectionReference } from "firebase/firestore";
import { DocumentData } from "firebase/firestore";
import { Invoice, InvoiceNavigation } from "../../components/index";
import "./Invoices.css";

const Invoices = () => {
  const [invoices, setInvoices] = useState<InvoiceType[]>([]);

  const invoicesCollectionRef: CollectionReference<DocumentData> = collection(
    db,
    "Invoices"
  );

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(invoicesCollectionRef);
      const invoicesArray = data.docs.map((singleInvoice) => ({
        ...singleInvoice.data(),
        id: singleInvoice.id,
      })) as InvoiceType[];
      setInvoices(invoicesArray);
    };

    getUsers();
  }, []);

  return (
    <div className="invoices__invoices-container">
      <InvoiceNavigation />
      {invoices.map((invoice) => (
        <Invoice key={invoice.id} invoice={invoice} />
      ))}
    </div>
  );
};

export default Invoices;
