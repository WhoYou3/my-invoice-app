import { Navbar, Invoices, InvoiceMaker } from "./Containers";
import { useAppSelector } from "./store/store";
import { motion } from "framer-motion";
import "./App.css";

const App: React.FC = () => {
  const isDarkMode = useAppSelector((state) => state.toggle.isDark);
  const isOpenForm = useAppSelector((state) => state.isAdding.isAdding);

  return (
    <div className={`app-container ${isDarkMode ? "dark" : "light"} `}>
      <Navbar />
      <Invoices />
      {isOpenForm ? <InvoiceMaker /> : null}
    </div>
  );
};

export default App;
