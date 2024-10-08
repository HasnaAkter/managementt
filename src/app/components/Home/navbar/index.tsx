"use client";
import { useState } from "react";
import Image from 'next/image';
import Link from "next/link";
import { MdArrowDropDownCircle } from "react-icons/md";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);

  return (
    <nav className="bg-_base fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">

          {/* Left Side (Logo) */}
          <div className="flex items-center sm:items-stretch sm:justify-start">
            <button
              type="button"
              className="relative flex items-center justify-center rounded-full p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
            >
              <span className="sr-only">View notifications</span>
              <Image
                src="/assets/image/logo.jpg" // Corrected path
                alt="Logo"
                className="rounded"
                width={40}
                height={40}
                priority
              />
            </button>
          </div>

          {/* Right Side (Mobile menu button and Profile dropdown) */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`block h-6 w-6 ${isMobileMenuOpen ? "hidden" : "block"}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`h-6 w-6 ${isMobileMenuOpen ? "block" : "hidden"}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Center Section (Navigation Links) */}
          <div className="hidden sm:flex sm:items-center sm:justify-center sm:space-x-4">
            <Link
              href="/"
              className="rounded-md px-3 py-2 text-sm font-bold text-_black bg-_white hover:bg-_gray hover:text-_white"
              aria-current="page"
            >
              Home
            </Link>
            <Link
              href="/media"
              className="rounded-md px-3 py-2 text-sm font-bold text-_black hover:bg-_gray hover:text-_white"
            >
              Media
            </Link>
            <Link
              href="/tour"
              className="rounded-md px-3 py-2 text-sm font-bold text-_black hover:bg-_gray hover:text-_white"
            >
              Tour
            </Link>
            <Link
              href="/blog"
              className="rounded-md px-3 py-2 text-sm font-bold text-_black hover:bg-_gray hover:text-_white"
            >
              Blog
            </Link>
            <Link
              href="/connect"
              className="rounded-md px-3 py-2 text-sm font-bold text-_black hover:bg-_gray hover:text-_white"
            >
              Connect
            </Link>
          </div>

          {/* Profile dropdown */}
          <div className="relative hidden sm:flex items-center">
            <button
              type="button"
              className="relative flex rounded-full bg-gray-800 p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
              id="user-menu-button"
              aria-expanded={isUserMenuOpen}
              aria-haspopup="true"
              onClick={toggleUserMenu}
            >
              <span className="sr-only">Open user menu</span>
            </button>

           
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`sm:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link
            href="/"
            className="block rounded-md px-3 py-2 text-sm font-bold text-white bg-_black hover:bg-gray-700"
            aria-current="page"
          >
              Home
          </Link>
          <Link
            href="/media"
            className="block rounded-md px-3 py-2 text-sm font-bold text-_black hover:bg-gray-700 hover:text-white"
          >
             Media
          </Link>
          <Link
            href="/projects"
            className="block rounded-md px-3 py-2 text-sm font-bold text-_black hover:bg-gray-700 hover:text-white"
          >
             Tour
          </Link>
          <Link
            href="/calendar"
            className="block rounded-md px-3 py-2 text-sm font-bold text-_black hover:bg-gray-700 hover:text-white"
          >
             Blog
          </Link>
          <Link
            href="/calendar"
            className="block rounded-md px-3 py-2 text-sm font-bold text-_black hover:bg-gray-700 hover:text-white"
          >
            Connect
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
