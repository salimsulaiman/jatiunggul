"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`border-gray-200 transition-all duration-300 ${
        scrolling ? "bg-primary-dark shadow" : "bg-primary-dark md:bg-transparent"
      } fixed right-0 left-0 z-50`}
    >
      <div
        className={`max-w-screen-lg mx-auto px-6 md:px-8 lg:px-6 py-4  text-white flex justify-between items-center flex-wrap`}
      >
        <Image
          className="h-10 w-auto"
          src={"/logo-jatiunggul.png"}
          width={500}
          height={500}
          quality={100}
          alt="logo"
        />
        <ul className="hidden md:flex items-center justify-center">
          <li>
            <Link href={"#home"} className="text-slate-200 hover:text-white ms-7">
              Beranda
            </Link>
            <Link href={"#about"} className="text-slate-200 hover:text-white ms-7">
              Tentang Kami
            </Link>
            <Link href={"#product"} className="text-slate-200 hover:text-white ms-7">
              Produk
            </Link>
            <Link href={"#gallery"} className="text-slate-200 hover:text-white ms-7">
              Galeri
            </Link>
            <Link href={"#contact"} className="text-slate-200 hover:text-white ms-7">
              Kontak
            </Link>
          </li>
        </ul>
        <button
          onClick={toggleNavbar}
          type="button"
          className="inline-flex md:hidden items-center justify-center p-2 w-10 h-10 text-sm rounded-lg  text-purple-light hover:text-purple-semi-dark focus:text-purple-semi-dark"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className={`w-full ${isExpanded ? "block" : "hidden"} md:hidden`}>
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-slate-700  dark:border-gray-700">
            <li>
              <Link
                href={"/#home"}
                className="block py-2 px-3 text-slate-200 hover:bg-primary-dark dark:text-slate-200 dark:hover:bg-primary-dark dark:hover:text-white"
                aria-current="page"
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                href={"/#article"}
                className="block py-2 px-3 text-slate-200 hover:bg-primary-dark dark:text-slate-200 dark:hover:bg-primary-dark dark:hover:text-white"
              >
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link
                href={"/#about"}
                className="block py-2 px-3 text-slate-200 hover:bg-primary-dark dark:text-slate-200 md:dark:hover:text-white dark:hover:bg-primary-dark dark:hover:text-white"
              >
                Produk
              </Link>
            </li>
            <li>
              <Link
                href={"/#about"}
                className="block py-2 px-3 text-slate-200 hover:bg-primary-dark dark:text-slate-200 md:dark:hover:text-white dark:hover:bg-primary-dark dark:hover:text-white"
              >
                Galeri
              </Link>
            </li>
            <li>
              <Link
                href={"/#about"}
                className="block py-2 px-3 text-slate-200 hover:bg-primary-dark dark:text-slate-200 md:dark:hover:text-white dark:hover:bg-primary-dark dark:hover:text-white"
              >
                Kontak
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
