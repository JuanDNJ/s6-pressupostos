import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Calculator from "./pages/Calculator";

const App = () => {
  return (
    <BrowserRouter basename="/s6-pressupostos">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculadora" element={<Calculator />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
