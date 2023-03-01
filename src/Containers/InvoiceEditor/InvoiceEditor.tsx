import { BackLink, InvoiceForm } from "../../components/index";
import { motion } from "framer-motion";
import { useAppSelector } from "../../store/store";
import "./invoiceEditor.css";

const InvoiceEditor = () => {
  const isEditForm = useAppSelector(
    (state) => state.isAddingOrUpdating.isEditing
  );

  return (
    <motion.div
      initial={{ x: -2403 }}
      animate={isEditForm ? { x: 0 } : { x: -2403 }}
      transition={{ duration: 1 }}
      className="invoiceMaker"
    >
      <div className="shadow"></div>
      <BackLink />
      <h2>Edit invoice</h2>
      <InvoiceForm />
    </motion.div>
  );
};

export default InvoiceEditor;
