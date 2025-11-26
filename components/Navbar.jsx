"use client";
import React, { use } from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { assets } from "@/assets/assets";
import Image from "next/image";
import LanguageToggle from "../components/LanguageToggle";
import { useLanguage } from "../app/context/LanguageContext";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { lang } = useLanguage();


    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav className="h-[70px] bg-gray-50 fixed top-0 w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-30 transition-all">
            {/* Logo */}
            <h1 className="text-3xl font-semibold">Teo<span className="text-blue-600">.dev</span></h1>

            {/* Desktop Menu */}
            <ul className="text-black md:flex hidden items-center gap-10">
                <li>
                    <Link href="#" className="hover:text-black/70 transition">
                        {lang === 'en' ? 'Home' : 'Αρχική'}
                    </Link>
                </li>
                <li>
                    <Link href="/#about" className="hover:text-black/70 transition">
                        {lang === 'en' ? 'About' : 'Προφίλ'}
                    </Link>
                </li>
                <li>
                    <Link href="/#projects" className="hover:text-black/70 transition">
                        {lang === 'en' ? 'Projects' : 'Δουλειές'}
                    </Link>
                </li>
                <li>
                    <Link href="/#contact" className="hover:text-black/70 transition">
                        {lang === 'en' ? 'Contact' : 'Επικοινωνία'}
                    </Link>
                </li>
            </ul>

            {/* Desktop Button */}
            <div className="flex justify-center align-center gap-4">

                <button
                    type="button"

                    className="bg-white text-black-700 border border-black md:inline hidden text-sm hover:opacity-90 active:scale-95 transition-all w-40 h-11 rounded-full"
                >
                    <Link href={'/sakarelos-cv.pdf'} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                        <span className="mr-2 text-black-700 font-medium">{lang === 'en' ? 'Download CV' : 'Λήψη CV'}</span>
                        <Image className="w-3 h-3" src={assets.arrow_icon} alt="arrow" />
                    </Link>
                </button>
                <LanguageToggle />
            </div>


            {/* Mobile Menu Button */}
            <button
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
                onClick={toggleMenu}
                className="menu-btn inline-block md:hidden active:scale-90 transition"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="#004cffff"
                >
                    <path d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2z" />
                </svg>
            </button>

            {/* Mobile Dropdown Menu */}
            <div
                className={`mobile-menu absolute top-[70px] left-0 w-full bg-blue-600 p-6 md:hidden transition-all duration-300 ease-in-out transform ${menuOpen ? "scale-y-100" : "scale-y-0"
                    } origin-top`}
            >
                <ul className="flex flex-col space-y-4 text-white text-lg">
                    <li>
                        <Link href="#" className="text-sm" onClick={() => setMenuOpen(false)}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/#about" className="text-sm" onClick={() => setMenuOpen(false)}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/#projects" className="text-sm" onClick={() => setMenuOpen(false)}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="/#contact" className="text-sm" onClick={() => setMenuOpen(false)}>
                            Contact
                        </Link>
                    </li>
                </ul>

                <button
                    type="button"
                    className="bg-white text-black-700 mt-5  md:inline  text-sm hover:opacity-90 active:scale-95 transition-all w-40 h-11 rounded-full"
                >
                    <Link href={'/sakarelos-cv.pdf'} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                        <span className="mr-2 text-black-700 font-medium">Download CV</span>
                        <Image className="w-3 h-3" src={assets.arrow_icon} alt="arrow" />
                    </Link>
                </button>
            </div>
        </nav>
    );
}
