'use client'

import Image from "next/image";
import Link from "next/link";
import LOGO from "@/app/assets/LOGO.png"
import staff from "@/app/assets/staffff.png"

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-100 shadow-md py-4">
        <div className="container mx-auto flex justify-center">
          <Image
            src={LOGO}
            alt="Logo"
            width={150}
            height={50}
            className="object-contain"
          />
        </div>
      </header>

      {/* Main Section */}
      <main className="flex flex-grow items-center justify-center bg-gray-100">
        <div className="max-w-4xl mx-auto flex bg-gray-100 flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Image Section */}
          <div className="md:w-1/2">
            <Image
              src={staff}
              alt="Staff Member"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Login Form Section */}
          <div className="md:w-1/2 p-6 bg-gray-100">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">
              Login below to access the dashboard
            </h1>
            <form method="get" className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email/Username:
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <Link href="/home">Login</Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          
          
          {/* Footer Text */}
          <p className="mt-4 md:mt-0">&copy; Ekondo Staff Portal 2024</p>
        </div>
      </footer>
    </div>
  );
}
