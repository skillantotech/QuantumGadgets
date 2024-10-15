import React from 'react'
import { FaGift } from "react-icons/fa6"
import { IoMdHelpCircle } from "react-icons/io";
import { HiOutlineMailOpen } from "react-icons/hi";
import Logo from './../../assets/FooterLogo.svg'
import Visa from './../../assets/icons8-visa-48.svg'
import MasterCard from './../../assets/icons8-mastercard-48.svg'
import Paypal from './../../assets/icons8-paypal-48.svg'

function Footer() {
  return (
    <>
      <footer className='footer justify-between items-center px-[2%] md:px-[5%] xl:px-[10%] py-5 mb-16'>
        <div className='flex items-center'>
          <HiOutlineMailOpen className='text-xl md:text-5xl text-secondary' />
          <p className='text-xs font-semibold md:text-sm'>
            Subscribe to
            <br />
            our Newsletter
          </p>
        </div>
        <p className='px-1 text-xs font-semibold border-l-2 md:px-2 md:text-sm'>
          Sign up for all the latest
          <br />
          news and special offers
        </p>
        <div className='flex items-center gap-0 border rounded-lg'>
          <input type="text" className='px-4 py-2 text-xs rounded-l-lg outline-none md:w-72' placeholder='Enter your Email...' />
          <button type='submit' className='p-2 text-xs font-semibold rounded-r-lg bg-secondary text-tertiary'>Subscribe</button>
        </div>
      </footer>
      <footer className="footer justify-between px-[2%] md:px-[5%] xl:px-[10%] py-5">
        <aside>
          <img src={Logo} alt="Logo" />
          <p className='mt-4 text-xs font-semibold w-60'>
            Discover a wide range of products
            <br />
            with seamless browsing and
            <br />
            personalized recommendations.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title text-zinc-950">Products</h6>
          <a className="text-xs link link-hover hover:text-secondary">Mobiles</a>
          <a className="text-xs link link-hover hover:text-secondary">PCs & Laptops</a>
          <a className="text-xs link link-hover hover:text-secondary">Tablets</a>
          <a className="text-xs link link-hover hover:text-secondary">Desktops</a>
          <a className="text-xs link link-hover hover:text-secondary">Headphones</a>
          <a className="text-xs link link-hover hover:text-secondary">Wireless Buds</a>
          <a className="text-xs link link-hover hover:text-secondary">Bluetooth Speaker</a>
          <a className="text-xs link link-hover hover:text-secondary">Powerbanks</a>
        </nav>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="text-xs link link-hover hover:text-secondary">Gift Card</a>
          <a className="text-xs link link-hover hover:text-secondary">Mobile App</a>
          <a className="text-xs link link-hover hover:text-secondary">Shipping & Delivery</a>
          <a className="text-xs link link-hover hover:text-secondary">Order Pickup</a>
          <a className="text-xs link link-hover hover:text-secondary">Account Sign Up</a>
          <a className="text-xs link link-hover hover:text-secondary">About Us</a>
          <a className="text-xs link link-hover hover:text-secondary">News & Blog</a>
        </nav>
        <nav>
          <h6 className="footer-title">Help</h6>
          <a className="text-xs link link-hover hover:text-secondary">Track Orders</a>
          <a className="text-xs link link-hover hover:text-secondary">Security & Fraud</a>
          <a className="text-xs link link-hover hover:text-secondary">Feedback</a>
          <a className="text-xs link link-hover hover:text-secondary">Contact Us</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="text-xs link link-hover hover:text-secondary">Terms of use</a>
          <a className="text-xs link link-hover hover:text-secondary">Privacy Policy</a>
          <a className="text-xs link link-hover hover:text-secondary">Return Policy</a>
          <a className="text-xs link link-hover hover:text-secondary">Cookie Policy</a>
        </nav>
        <nav>
          <h6 className="footer-title">Accepted Payments</h6>
          <div className='flex gap-1'>
            <img src={Visa} alt="Visa" />
            <img src={MasterCard} alt="Master card" />
            <img src={Paypal} alt="Paypal" />
          </div>
        </nav>
      </footer>
      <hr className='mx-[2%] md:mx-[5%] xl:mx-[10%]' />
      <footer className='footer justify-between px-[2%] md:px-[5%] xl:px-[10%] py-5'>
        <div className='flex gap-5'>
          <div className='flex items-center'>
            <FaGift className='text-sm text-secondary' />
            <a href='' className='text-xs hover:text-secondary hover:underline'>Gift Cards</a>
          </div>
          <div className='flex items-center'>
            <IoMdHelpCircle className='text-sm text-secondary' />
            <a href='' className='text-xs hover:text-secondary hover:underline'>Help Center</a>
          </div>
          <a href='' className='text-xs hover:text-secondary hover:underline'>Terms of Service</a>
          <a href='' className='text-xs hover:text-secondary hover:underline'>Privacy Policy</a>
        </div>
        <span className='text-xs'>All rights reserved by Quantum Gadgets | 2024</span>
      </footer>
    </>
  )
}

export default Footer