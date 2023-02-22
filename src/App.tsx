import { Navbar, Invoices, InvoiceMaker } from "./Containers";
import "./App.css";
import { useAppSelector } from "./store/store";

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
