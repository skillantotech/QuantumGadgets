import React from 'react'
import Header from './Header/Header'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import ContactForm from './Contact/ContactForm'

function ContactUs() {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <Navbar />
            <main className='flex-grow'>
                <ContactForm />
            </main>
            <Footer />
        </div>
    )
}

export default ContactUs