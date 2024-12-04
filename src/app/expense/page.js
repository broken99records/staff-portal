'use client'


import Image from "next/image";
import Link from "next/link";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function Expense() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <Header/>
      
      <hr className="my-4" />

      {/* Main Section */}
      <section className="container mx-auto flex flex-col md:flex-row mt-8 gap-8">
        {/* Sidebar Navigation */}
        <SideBar/>
        

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
      <Footer/>
       </div>
  );
}
