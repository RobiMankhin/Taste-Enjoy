import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Success from "./Pages/Success";
import Notfound from "./Pages/Notfound";
import OrderFailed from "./Components/OrderFailed";
import OrderWithoutItem from "./Components/OrderWithoutItem";
function App() {
  return (
    <>
      <BrowserRouter className="text-lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Notfound />} />
          <Route path="/failed" element={<OrderFailed />} />
          <Route
            path="/success"
            element={<OrderWithoutItem component={<Success />} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
