import "./index.css";
import RefProvider from "./context/RefProvider";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./container/Home";

function App() {
  return (
    <div>
      <RefProvider>
        <Header />
        <Home />
        <Footer />
      </RefProvider>
    </div>
  );
}

export default App;
