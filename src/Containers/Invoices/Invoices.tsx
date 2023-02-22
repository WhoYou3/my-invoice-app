import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase-config";
import { InvoiceType } from "./InvoiceType";
import { collection, getDocs, CollectionReference } from "firebase/firestore";
import { DocumentData } from "firebase/firestore";
import Invoice from "../../components/Invoice/Invoice";
import InvoiceNavigation from "../../components/InvoiceNavigation/InvoiceNavigation";
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

  console.log(invoices);
  return (
    <div className="invoices__invoices-container">
      <InvoiceNavigation />
      {invoices.map((invoice) => (
        <Invoice invoice={invoice} />
      ))}
    </div>
  );
};

export default Invoices;
