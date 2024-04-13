import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Calculator from "./pages/Calculator";
import Store from "./context/Store";
import Modal from "./components/Modal";
import ViewBudgetShared from "./pages/ViewBudgetShared";

const App = () => {
  return (
    <Store>
      <BrowserRouter basename="/s6-pressupostos">
        <Modal />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pressupost-compartit" element={<ViewBudgetShared />} />
          <Route path="/calculadora" element={<Calculator />} />
        </Routes>
      </BrowserRouter>
    </Store>
  );
};

export default App;
