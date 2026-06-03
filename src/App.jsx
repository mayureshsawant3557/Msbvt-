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