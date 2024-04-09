import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Bookings from "./container/Bookings";
import Classes from "./container/Classes";
import Events from "./container/Events";
import Horarios from "./container/Horarios";
import LandingPage from "./container/LandingPage";
import Home from "./container/Home";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clases" element={<Classes />} />
        <Route path="/eventos" element={<Events />} />
        <Route path="/horarios" element={<Horarios />} />
        <Route path="/reservas" element={<Bookings />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
