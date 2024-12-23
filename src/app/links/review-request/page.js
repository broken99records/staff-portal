"use client";

import Header from "@/app/components/Header"; // Adjust path as needed
import Footer from "@/app/components/Footer"; // Adjust path as needed
import Sidebar from "@/app/components/SideBar"; // Adjust path as needed
import { useState, useEffect } from "react";
import Link from "next/link";
import { getAllRequests } from "@/app/appwriteFunctions";

export default function ReviewRequest() {
  const [expandedId, setExpandedId] = useState(null);
  const [requests, setRequests] = useState([]);


  useEffect(() => {
    async function fetchRequests() {
      try {
        const response = getAllRequests();
        setRequests(response);
      } catch (error) {
        console.error("Error fetching requests:", error);
      }
    }

    fetchRequests();
  }, []);

  const users = [
    {
      id: 1,
      name: "Neil Sims",
      email: "email@flowbite.com",
      amount: 320456,
      details: "Request details for Neil Sims - Pending approval",
    },
    {
      id: 2,
      name: "Bonnie Green",
      email: "email@flowbite.com",
      amount: 3467,
      details: "Request details for Bonnie Green - In progress",
    },
    {
      id: 3,
      name: "Michael Gough",
      email: "email@flowbite.com",
      amount: 6744,
      details: "Request details for Michael Gough - Completed",
    },
    {
      id: 4,
      name: "Thomas Lean",
      email: "email@flowbite.com",
      amount: 2367,
      details: "Request details for Thomas Lean - Under review",
    },
    {
      id: 5,
      name: "Lana Byrd",
      email: "email@flowbite.com",
      amount: 3675,
      details: "Request details for Lana Byrd - Awaiting input",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      <div className="container mx-auto mt-8 flex-col md:flex-row gap-8 px-4 flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 bg-gray-50 p-8">
          <h3 className="text-2xl text-black font-semibold mb-6 ml-4">Review Request</h3>

          <ul className="max-w-lg divide-y text-black  ">
            {requests?.map((request) => (
              <li
                key={request.$id}
                className="w-full cursor-pointer transition-all duration-200"
                onClick={() =>
                  setExpandedId(expandedId === request.id ? null : request.id)
                }
              >
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate ">
                        {request.payee_name}
                      </p>
                      <p className="text-sm text-gray-500 truncate ">
                        {request.branch}
                      </p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-base font-semibold text-gray-900">
                      &#8358;{request.total_amount}
                      </div>
                      {expandedId === request.$id ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-up"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M6 15l6 -6l6 6" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M6 9l6 6l6 -6" />
                        </svg>
                      )}
                    </div>
                  </div>

                  {expandedId === request.$id && (
                    <div className="mt-4 p-4 gap-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-700">
                        {request.description}
                      </p>
                      <div className="flex flex-wrap gap-4 mt-10">
                        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                          AUTHORIZE
                        </button>
                        <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
                          RETURN
                        </button>
                        
                      </div>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="hidden flex flex-wrap gap-4 mt-10">
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              AUTHORIZE
            </button>
            <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
              RETURN
            </button>
            <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
              REJECT
            </button>
            <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
              REQUEST PAYMENT
            </button>
            <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
              SEND CASH
            </button>
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              DELIVERY
            </button>
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
