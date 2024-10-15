import React, { useEffect, useState } from 'react'
import Logo from './../../assets/Logo.svg'
import { FaSearch } from 'react-icons/fa'
import { FaBars } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

function Header() {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <header className="navbar bg-neutral px-[1%] md:px-[5%] xl:px-[10%]">
                <div className="gap-2 navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-sm btn-neutral btn-square md:hidden">
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
                                    <summary className='cursor-pointer hover:text-secondary'>Categories</summary>
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
                    <img src={Logo} alt="Logo" className='w-16 md:w-auto' />
                </div>
                <div className="hidden gap-1 navbar-center md:flex">
                    <input
                        type="search"
                        name='search'
                        placeholder='Search for Products...'
                        className='px-5 py-1 text-sm rounded-full outline-none w-80'
                        aria-label='Search for Products'
                    />
                    <a href="" className='p-2 rounded-full bg-secondary hover:opacity-80'><FaSearch className='text-sm text-tertiary' aria-label='Search' /></a>
                </div>
                <div className="gap-3 navbar-end">
                    <a href="" className="text-2xl text-secondary md:hidden">
                        <FiShoppingCart />
                    </a>
                    <a href="" className="p-1 text-sm rounded-sm bg-secondary hover:opacity-80 text-tertiary md:px-3 md:py-2">Log In</a>
                </div>
            </header>

            {isMobile && (
                <div className="flex items-center gap-1 px-3 py-2 md:hidden">
                    <input
                        type="search"
                        name='search'
                        placeholder='Search for Products...'
                        className='w-full px-3 py-1 text-sm border rounded-full outline-none'
                        aria-label="Search for Products"
                    />
                    <a
                        href=""
                        className='p-2 rounded-full bg-secondary hover:opacity-80'
                        aria-label="Search"
                    >
                        <FaSearch className='text-sm text-tertiary' />
                    </a>
                </div>
            )}
        </>
    )
}

export default Header