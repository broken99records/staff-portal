'use client'

import Link from "next/link";
import Image from "next/image";
import LOGO from "@/app/assets/LOGO.png"; // Update the path as per your project structure
import { useState } from "react";
import { logout } from "../appwriteFunctions";
import { useRouter } from "next/navigation";

const Header = () => {

  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () =>{
    logout();
    router.push('/')
  }

  

  return (
    <header className="bg-gray-100 shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/login">
            <Image
              src={LOGO}
              alt="Logo"
              width={120} // Set a fixed width
              height={50}
              style={{ width: 'auto', height: 'auto' }} // Ensure aspect ratio is maintained
              className="object-contain"
            />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-700 md:hidden focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen
                  ? "M6 18L18 6M6 6l12 12" // Close icon
                  : "M4 6h16M4 12h16M4 18h16" // Menu icon
              }
            />
          </svg>
        </button>

        {/* Navigation */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-6`}
        >
          <Link href="#approval" className="text-gray-700 hover:text-blue-600 block py-2 md:py-0">
            Approval
          </Link>
          <Link href="#leave" className="text-gray-700 hover:text-blue-600 block py-2 md:py-0">
            Leave
          </Link>
          <Link
            href="/expense"
            className="text-white bg-green-600 hover:bg-blue-700 px-4 py-2 rounded-md shadow-md block md:inline-block"
          >
            Expense
          </Link>
          <Link href="#lms" className="text-gray-700 hover:text-blue-600 block py-2 md:py-0">
            L.M.A
          </Link>
          <button
          className="text-white bg-green-600 hover:bg-blue-700 px-4 py-2 rounded-md shadow-md block md:inline-block"
          onClick={handleLogout}
          >
            logout
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
