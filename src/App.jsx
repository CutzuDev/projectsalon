import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NFHandle from "./pages/NFHandle";
import Services from "./pages/Services";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/servicii" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NFHandle />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
