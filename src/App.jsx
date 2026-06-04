<<<<<<< HEAD
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
=======
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'


const App = () => {
  return (
    <div className= "overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <main className="flex-grow">
        <Hero />
      </main>

      <Footer />
    </div>
  )
}

export default App
>>>>>>> 07e04b58171e30135cfb2fafdf8e5bfade5b726b
