'use client'

import Header from '@/app/components/Header'; // Adjust path as needed
import Footer from '@/app/components/Footer'; // Adjust path as needed
import Sidebar from '@/app/components/SideBar'; // Adjust path as needed
import { useState } from 'react';

export default function CashAdvance() {
     // State variables
  const [department, setDepartment] = useState("");
  const [branch, setBranch] = useState("");
  const [payeeName, setPayeeName] = useState("");
  const [payeeAccount, setPayeeAccount] = useState("");
  const [invoiceAmount, setInvoiceAmount] = useState("");
  const [cashAdvance, setCashAdvance] = useState("");
  const [narration, setNarration] = useState("");
  const [lessWhat, setLessWhat] = useState("");
  const [amount, setAmount] = useState("");
  //might not need the following
  const [email, setEmail] = useState("");
  const [submittedData, setSubmittedData] = useState(null); // To store response or confirmation

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form behavior
    const data = { department, branch, payeeName, payeeAccount, invoiceAmount, cashAdvance, narration, 
        lessWhat, amount };

    // Send POST request when form is submitted
    fetch("https://mail-setup.onrender.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        setSubmittedData(result); // Store response data
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
      });
  };




    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <Header />

            <div className="container mx-auto mt-8 flex-col md:flex-row gap-8 px-4 flex">
                {/* Sidebar */}
                <Sidebar />

                {/* Main Content */}
                <main className="flex-1 bg-gray-50 p-8 text-gray-700 rounded-lg shadow-md ">
                    <h3 className="text-2xl font-semibold mb-6">Cash Advance</h3>
                    
                    <section className="grid grid-cols-2 gap-8 mb-8">
                        <div>
                            <form>
                                <label className="block mb-2 font-medium" htmlFor="branch">Branch:</label>
                                <input
                                    type="text"
                                    id="branch"
                                    name="branch"
                                    className="w-full border border-gray-300 p-2 rounded"
                                    onChange={(e) => setBranch(e.target.value)}
                                />

                                <label className="block mt-4 mb-2 font-medium" htmlFor="payeeName">Payee Name:</label>
                                <input
                                    type="text"
                                    id="payeeName"
                                    name="payeeName"
                                    className="w-full border border-gray-300 p-2 rounded"
                                    onChange={(e) => setPayeeName(e.target.value)}

                                />

                                <label className="block mt-4 mb-2 font-medium" htmlFor="invoiceAmount">Invoice Amount:</label>
                                <input
                                    type="text"
                                    id="invoiceAmount"
                                    name="invoiceAmount"
                                    className="w-full border border-gray-300 p-2 rounded"
                                    onChange={(e) => setInvoiceAmount(e.target.value)}

                                />
                            </form>
                        </div>

                        <div>
                            <form>
                                <label className="block mb-2 font-medium" htmlFor="department">Department:</label>
                                <input
                                    type="text"
                                    id="department"
                                    name="department"
                                    className="w-full border border-gray-500 p-2 rounded"
                                    onChange={(e) => setDepartment(e.target.value)}

                                />

                                <label className="block mt-4 mb-2 font-medium" htmlFor="payeeAccount">Payee Account:</label>
                                <input
                                    type="text"
                                    id="payeeAccount"
                                    name="payeeAccount"
                                    className="w-full border border-gray-300 p-2 rounded"
                                    onChange={(e) => setPayeeAccount(e.target.value)}

                                />

                                <label className="block mt-4 mb-2 font-medium" htmlFor="cashAdvance">Cash Advance:</label>
                                <input
                                    type="text"
                                    id="cashAdvance"
                                    name="cashAdvance"
                                    className="w-full border border-gray-300 p-2 rounded"
                                    onChange={(e) => setCashAdvance(e.target.value)}

                                />
                            </form>
                        </div>
                    </section>

                    <form className="mb-8">
                        <label className="block mb-2 font-medium" htmlFor="narration">Narration:</label>
                        <input
                            type="text"
                            id="narration"
                            name="narration"
                            className="w-full border border-gray-300 p-2 rounded"
                            onChange={(e) => setNarration(e.target.value)}

                        />
                    </form>

                    <section className="grid grid-cols-2 gap-8 mb-8">
                        <div>
                            <label className="block mb-2 font-medium" htmlFor="lessWhat">Less What (if any):</label>
                            <input
                                type="text"
                                id="lessWhat"
                                name="lessWhat"
                                className="w-full border border-gray-300 p-2 rounded"
                                onChange={(e) => setLessWhat(e.target.value)}

                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-medium" htmlFor="amount">Amount:</label>
                            <input
                                type="text"
                                id="amount"
                                name="amount"
                                className="w-full border border-gray-300 p-2 rounded"
                                onChange={(e) => setAmount(e.target.value)}

                            />
                        </div>
                    </section>

                    <form className="mb-8">
                        <label className="block mb-2 font-medium" htmlFor="managementApproval">
                            Management Board Approval:
                        </label>
                        <input
                            type="file"
                            id="managementApproval"
                            name="managementApproval"
                            className="block"
                        />
                    </form>

                    <form className="mb-8">
                        <label className="block mb-2 font-medium" htmlFor="proformaInvoice">
                            Upload Proforma Invoice:
                        </label>
                        <input
                            type="file"
                            id="proformaInvoice"
                            name="proformaInvoice"
                            className="block"
                        />
                    </form>

                    <div className="flex flex-wrap gap-4">
                        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                            ORIGINATE
                        </button>
                        <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
                            RETURN
                        </button>
                        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                            AUTHORIZE
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
                    </div>
                </main>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}
