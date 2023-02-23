import React from "react";
import { BackLink, InvoiceForm } from "../../components/index";
import { motion } from "framer-motion";
import { useAppSelector } from "../../store/store";
import "./invoiceMaker.css";

const InvoiceMaker = () => {
  const isOpenForm = useAppSelector((state) => state.isAdding.isAdding);

  return (
    <motion.div
      initial={{ x: -2403 }}
      animate={isOpenForm ? { x: 0 } : { x: -2403 }}
      transition={{ duration: 1 }}
      className="invoiceMaker"
    >
      <div className="shadow"></div>
      <BackLink />
      <h2>New Invoice</h2>
      <InvoiceForm />
    </motion.div>
  );
};

export default InvoiceMaker;
