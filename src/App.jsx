import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Calculator from "./pages/Calculator";
import Store from "./context/Store";
const App = () => {
  return (
    <Store>
      <BrowserRouter basename="/s6-pressupostos">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculadora" element={<Calculator />} />
        </Routes>
      </BrowserRouter>
    </Store>
  );
};

export default App;
