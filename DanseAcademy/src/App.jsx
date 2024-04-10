import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./container/Home";

function App() {
  return (
    <div>
      <Header />

        <Home />

      <Footer />
    </div>
  );
}

export default App;
