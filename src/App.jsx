import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Hero from "./components/Hero/Hero";
import Helpdesk from "./components/Helpdesk/Helpdesk";

const App = () => {
  return (
    <BrowserRouter>
      <div className="overflow-x-hidden">
        <Navbar />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/helpdesk" element={<Helpdesk />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;