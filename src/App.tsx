import { Navbar, Invoices, InvoiceMaker } from "./Containers";
import { useAppSelector } from "./store/store";
import { motion } from "framer-motion";
import "./App.css";
import { InvoiceDetail } from "./components";

const App: React.FC = () => {
  const isDarkMode = useAppSelector((state) => state.toggle.isDark);
  const isOpenForm = useAppSelector((state) => state.isAdding.isAdding);
  const isDetailCard = useAppSelector(
    (state) => state.isOpenDetail.isShowDetail
  );

  return (
    <div className={`app-container ${isDarkMode ? "dark" : "light"} `}>
      <Navbar />
      <Invoices />

      {isOpenForm ? <InvoiceMaker /> : null}
    </div>
  );
};

export default App;
