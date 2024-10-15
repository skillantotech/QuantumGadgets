import React from 'react'
import Header from './Header/Header'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
     <Header />
     <Navbar />
     <main className='flex-grow'>

     </main>
     <Footer />
    </div>
  )
}

export default Home