import { Navbar, Invoices } from "./Containers";
import "./App.css";
import { useAppSelector } from "./store/store";

const App: React.FC = () => {
  const isDarkMode = useAppSelector((state) => state.toggle.isDark);

  return (
    <div className={`app-container ${isDarkMode ? "dark" : "light"} `}>
      <Navbar />
      <Invoices />
    </div>
  );
};

export default App;
