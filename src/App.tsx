import { Navbar, Invoices } from "./Containers";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Invoices />
    </div>
  );
};

export default App;
