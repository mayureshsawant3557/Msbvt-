import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className= "overflow-x-hidden">
      <Navbar />

      {/* Hero Section Placeholder */}
      <main className="flex-grow">
        <section className="min-h-[70vh] flex items-center justify-center bg-gray-50">
          <h1 className="text-4xl font-bold text-gray-400">
            Hero Section Goes Here
          </h1>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App