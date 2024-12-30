"use client"

import Header from '@/app/components/Header'; // Adjust path as needed
import Footer from '@/app/components/Footer'; // Adjust path as needed
import Sidebar from '@/app/components/SideBar'; // Adjust path as needed
import { useState } from 'react';

export default function StationeryRequest() {
  const [branch, setBranch] = useState('');
  const [department, setDepartment] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');


  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      <div className="flex flex-col md:flex-row mt-8 gap-8 px-4 container mx-auto">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 bg-gray-50 p-8 text-gray-800 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-6">Stationery Request</h3>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <form>
                <label htmlFor="branch" className="block mb-2 font-medium">Branch:</label>
                <input
                  type="text"
                  id="branch"
                  name="branch"
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </form>
            </div>

            <div>
              <form>
                <label htmlFor="department" className="block mb-2 font-medium">Department:</label>
                <input
                  type="text"
                  id="department"
                  name="department"
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </form>
            </div>
          </section>

          <p className="mb-4">We wish to apply for the following stationeries for our branch/department.</p>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <label htmlFor="description" className="block mb-2 font-medium">Description:</label>
              <input
                type="text"
                id="description"
                name="description"
                className="w-full border border-gray-300 p-2 rounded"
                size="50"
              />
            </div>

            <div>
              <label htmlFor="quantity" className="block mb-2 font-medium">Quantity:</label>
              <input
                type="text"
                id="quantity"
                name="quantity"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
          </section>

          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-6">
            ADD ITEM
          </button>

          <div className="flex flex-wrap gap-4">
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-blue-600">
              ORIGINATE
            </button>
            <button className="hidden px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
              RETURN
            </button>
            <button className="px-4 hidden py-2 bg-green-500 text-white rounded hover:bg-green-600">
              AUTHORIZE
            </button>
            <button className="px-4 py-2 hidden bg-red-500 text-white rounded hover:bg-red-600">
              REJECT
            </button>
            <button className="px-4 py-2 hidden bg-yellow-500 text-white rounded hover:bg-yellow-600">
              REQUEST PAYMENT
            </button>
            <button className="px-4 py-2 hidden bg-purple-500 text-white rounded hover:bg-purple-600">
              SEND CASH
            </button>
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
