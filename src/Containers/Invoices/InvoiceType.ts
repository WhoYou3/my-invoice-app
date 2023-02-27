import { Item } from "../../components/InvoiceForm/InvoiceForm";

export interface InvoiceType {
  id: string;
  name: string;
  email: string;
  city: string;
  date: string;
  country: string;
  paymentTerm: string;
  projectDescription: string;
  projectDetails: string;
  postCode: string;
  street: string;
  cost: number;
  invoiceItems: Item[];
  status: "PENDING" | "DRAFT" | "PAID";
}
