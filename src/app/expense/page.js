'use client'


import Image from "next/image";
import Link from "next/link";
import LOGO from "@/app/assets/LOGO.png"


export default function Expense() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-gray-100 shadow-md py-4">
        <div className="container bg-gray-100 mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src={LOGO}
              alt="Logo"
              width={150}
              height={50}
              className="object-contain"
            />
          </div>

          {/* Navigation */}
          <nav className="space-x-6 text-gray-100">
            <Link href="#approval" className="text-gray-700 hover:text-blue-600">
              Approval
            </Link>
            <Link href="#leave" className="text-gray-700 hover:text-blue-600">
              Leave
            </Link>
            <Link
              href="/expense"
              className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md shadow-md"
            >
              Expense
            </Link>
            <Link href="#lms" className="text-gray-700 hover:text-blue-600">
              L.M.S
            </Link>
          </nav>
        </div>
      </header>
      <hr className="my-4" />

      {/* Main Section */}
      <section className="container mx-auto flex flex-col md:flex-row mt-8 gap-8">
        {/* Sidebar Navigation */}
        <aside className="w-full md:w-1/4 bg-gray-100 shadow-md p-6 rounded-lg">
          <h2 className="text-lg text-gray-800 font-bold mb-4">Expense Options</h2>
          <ul className="space-y-4">
            <li>
              <Link
                href="/petty-cash-advance"
                className="text-blue-600 hover:text-blue-800"
              >
                Petty Cash Advance
              </Link>
            </li>
            <li>
              <Link
                href="/petty-cash-retirement"
                className="text-blue-600 hover:text-blue-800"
              >
                Petty Cash Retirement
              </Link>
            </li>
            <li>
              <Link
                href="/cash-advance"
                className="text-blue-600 hover:text-blue-800"
              >
                Cash Advance
              </Link>
            </li>
            <li>
              <Link
                href="/opexncapex-retirement"
                className="text-blue-600 hover:text-blue-800"
              >
                Opex/Capex Retirement
              </Link>
            </li>
            <li>
              <Link
                href="/stationery-request"
                className="text-blue-600 hover:text-blue-800"
              >
                Stationery Request
              </Link>
            </li>
          </ul>
        </aside>

        {/* Expense Management Content */}
        <div className="w-full md:w-3/4 bg-gray-100 shadow-md p-8 rounded-lg">
          <h3 className="text-2xl text-gray-800 font-bold mb-4">Expense Management</h3>
          <p className="text-gray-700 mb-4">
            This platform is designed to simplify your financial processes and
            ensure seamless management of various expense-related tasks. From
            handling cash advances to processing retirements and requests, our
            system offers an efficient, user-friendly interface to keep
            everything organized and accessible.
          </p>
          <p className="text-gray-700 mb-4">
            We are here to help you manage expenses smoothly, with tools that
            make tracking, requesting, and retiring funds easier than ever. If
            you need assistance, feel free to reach out anytime.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-auto">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Footer Text */}
          <p className="text-center md:text-left mb-4 md:mb-0">
            &copy; Ekondo Staff Portal 2024
          </p>

          {/* Social Icons */}
          <div className="flex space-x-6">
            <Link
              href="https://www.facebook.com/ekondomfb/about"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/facebook.png"
                alt="Facebook"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="https://x.com/ekondomfb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/twitter.png"
                alt="Twitter"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/ekondo-bank-40a666155"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/linkedin.png"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="https://www.instagram.com/ekondomfb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/instagram.png"
                alt="Instagram"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
