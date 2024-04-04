import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Calculator from "./pages/Calculator";
import Store from "./context/Store"
const App = () => {
  return (
    <BrowserRouter basename="/s6-pressupostos">
      <Store>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculadora" element={<Calculator />} />
      </Routes>
      </Store>
    </BrowserRouter>
  );
};

export default App;
