import { useEffect } from "react";
import { db } from "../../firebase/firebase-config";
import { collection, getDocs, CollectionReference } from "firebase/firestore";
import { DocumentData } from "firebase/firestore";
import InvoiceNavigation from "../../components/InvoiceNavigation/InvoiceNavigation";
import "./Invoices.css";

const Invoices = () => {
  const invoicesCollectionRef: CollectionReference<DocumentData> = collection(
    db,
    "Invoices"
  );

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(invoicesCollectionRef);
      data.docs.map((doc) => console.log(doc.data()));
    };

    getUsers();
  }, []);
  return (
    <div className="invoices__invoice">
      <InvoiceNavigation />
    </div>
  );
};

export default Invoices;
