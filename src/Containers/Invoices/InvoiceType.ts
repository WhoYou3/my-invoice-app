export interface InvoiceType {
  id: string;
  name: string;
  email: string;
  date: string;
  paymentTerms: string;
  projectDescription: string;
  projectDetails: string;
  postCode: string;
  street: string;
  cost: number;
  status: "PENDING" | "DRAFT" | "PAID";
}
