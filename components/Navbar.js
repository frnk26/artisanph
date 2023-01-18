'use client';
import classNames from 'classnames';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineShopping } from "react-icons/ai";

const Navbar = () => {
    const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);
    return (
        <header className=' md:grid md:justify-items-center fixed top-0 w-full left-0 z-10 text-xl p-4 bg-skin-primary'>
            <div className="container grid grid-flow-col grid-cols-3 justify-items-center place-items-center">
                <button className='md:hidden'
                    onClick={() => setHamburgerIsOpen((open) => !open)}>
                    <span className='sr-only'>Toggle menu</span>
                    <AiOutlineMenu />
                </button>
                <div className="logo">
                    <h3 className=' font-cinzel leading-0'>A</h3>
                </div>

                <div className="nav-icons flex">
                    <div className="profile-icon">

                    </div>
                    <div className="shop-icon">
                        <AiOutlineShopping />
                        <h5 className='hidden'>CART</h5>
                    </div>
                </div>
                <nav className={classNames('fixed top-[5.1rem] bg-skin-primary w-full h-[25vh] md:col-start-2 md:h-full md:block md:static', hamburgerIsOpen ? "" : "hidden")}>
                    <ul className='grid text-base h-full justify-items-center items-center md:grid-flow-col [&_a]:font-semibold'>
                        <li><Link href="#">HOME</Link></li>
                        <li><Link href="#">ABOUT</Link></li>
                        <li><Link href="#">SHOP</Link></li>
                        <li><Link href="#">FAQ</Link></li>
                    </ul>
                </nav>
            </div >

        </header >
    )
}

export default Navbar