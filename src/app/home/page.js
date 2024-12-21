'use client'

import Image from "next/image";
import Link from "next/link";
//import stafff from "@/app/assets/stafff.png.jpg"
import LOGO from "@/app/assets/LOGO.png"
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header/>

      {/* Main Section */}
      <main className="flex flex-grow items-center justify-center bg-gray-100">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Image Section */}
          <div className="md:w-1/2">
            <Image
              src={"/assets/green-shirt-group.png"}
              alt="Staff Member"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Welcome Content */}
          <div className="md:w-1/2 p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Welcome to Staff Portal
            </h1>
            <ul className="space-y-3 text-lg">
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-blue-600 flex items-center"
                >
                  📂 Manage Appraisal
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-blue-600 flex items-center"
                >
                  📝 Apply for Leave
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-blue-600 flex items-center"
                >
                  💰 Track your Expenses
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-blue-600 flex items-center"
                >
                  🏦 Track your Loan Process
                </Link>
              </li>
            </ul>
            <p className="mt-6 text-gray-600">
              Please feel free to explore, and do not hesitate to reach out if
              you need any assistance. We are here to ensure you have everything
              you need to succeed!
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <p className="mt-4 md:mt-0">&copy; Ekondo Staff Portal 2024</p>
        </div>
      </footer>
    </div>
  );
}
