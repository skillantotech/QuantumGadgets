import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { FaBars } from "react-icons/fa";


function Navbar() {
  return (
    <nav className="navbar hidden md:flex bg-tertiary px-[2%] py-0 md:px-[5%] xl:px-[10%]">
      <div className="navbar-start flex items-center">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <FaBars className="text-lg" />
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-60 p-2 shadow">
            <li><a href='' className='hover:text-secondary'>New Arrivals</a></li>
            <li><a href='' className='hover:text-secondary'>Today&#39;s Deals</a></li>
            <li><a href='' className='hover:text-secondary'>Weekly Deals</a></li>
            <li>
              <details>
                <summary className='hover:text-secondary cursor-pointer'>Categories</summary>
                <ul className="p-2">
                  <li><a href='' className='hover:text-secondary'>Mobile</a></li>
                  <li><a href='' className='hover:text-secondary'>PC & Laptop</a></li>
                  <li><a href='' className='hover:text-secondary'>Tablet</a></li>
                  <li><a href='' className='hover:text-secondary'>Desktop</a></li>
                  <li><a href='' className='hover:text-secondary'>Headphones</a></li>
                  <li><a href='' className='hover:text-secondary'>Wireless Buds</a></li>
                  <li><a href='' className='hover:text-secondary'>Bluetooth Speaker</a></li>
                  <li><a href='' className='hover:text-secondary'>Powerbank</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="dropdown hidden md:block">
          <label tabIndex={0} className="btn btn-ghost flex items-center">
            Categories <IoIosArrowDown className="text-sm" />
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><a href='' className='hover:text-secondary'>Mobile</a></li>
            <li><a href='' className='hover:text-secondary'>PC & Laptop</a></li>
            <li><a href='' className='hover:text-secondary'>Tablet</a></li>
            <li><a href='' className='hover:text-secondary'>Desktop</a></li>
            <li><a href='' className='hover:text-secondary'>Headphones</a></li>
            <li><a href='' className='hover:text-secondary'>Wireless Buds</a></li>
            <li><a href='' className='hover:text-secondary'>Bluetooth Speaker</a></li>
            <li><a href='' className='hover:text-secondary'>Powerbank</a></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <div className="flex space-x-4">
          <a href="#" className="hover:text-secondary text-xs font-semibold">New Arrivals</a>
          <a href="#" className="hover:text-secondary text-xs font-semibold">Today&#39;s Deals</a>
          <a href="#" className="hover:text-secondary text-xs font-semibold">Weekly Deals</a>
        </div>
      </div>
      <div className="navbar-end">
        <a href="" className="text-secondary text-2xl">
          <FiShoppingCart />
        </a>
      </div>
    </nav>

  )
}

export default Navbar