export interface InvoiceType {
  id: string;
  clientName: string;
  clientEmail: string;
  date: string;
  paymentTerms: string;
  project: string;
  projectDetails: string;
  clientAddres: Addres;
}

interface Addres {
  city: string;
  country: string;
  postCode: string;
}
