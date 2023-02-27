import { Navbar, Invoices, InvoiceMaker } from "./Containers";
import { useAppSelector } from "./store/store";

import "./App.css";
import InvoiceEditor from "./Containers/InvoiceEditor/InvoiceEditor";

const App: React.FC = () => {
  const isDarkMode = useAppSelector((state) => state.toggle.isDark);
  const isAddForm = useAppSelector(
    (state) => state.isAddingOrUpdating.isAdding
  );
  const isEditForm = useAppSelector(
    (state) => state.isAddingOrUpdating.isEditing
  );
  console.log(isEditForm);

  return (
    <div className={`app-container ${isDarkMode ? "dark" : "light"} `}>
      <Navbar />
      <Invoices />

      {isAddForm ? <InvoiceMaker /> : null}
      {isEditForm ? <InvoiceEditor /> : null}
    </div>
  );
};

export default App;
