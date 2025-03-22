"use client";

import Header from "@/app/components/Header"; // Adjust path as needed
import Footer from "@/app/components/Footer"; // Adjust path as needed
import Sidebar from "@/app/components/SideBar"; // Adjust path as needed
import { useState, useEffect } from "react";
import { addRequestToDb } from "@/app/appwriteFunctions";

export default function Opex() {
  // State variables
  const [department, setDepartment] = useState("IT");
  const [branch_name, setBranchName] = useState("TEST");
  const [payee_name, setPayeeName] = useState("Ama");
  const [payee_account, setPayeeAccount] = useState("eshiet");
  const [invoice_amount, setInvoiceAmount] = useState("3344343334");
  const [cash_advance, setCashAdvance] = useState("34343434");
  const [narration, setNarration] = useState("hello world, this is a test");
  const [less_what, setLessWhat] = useState("3445554");
  const [amount, setAmount] = useState("4745848399");
  const [refund_reimbursement, setRefundReimbursement] = useState("test");
  const [request_type, setRequest_type] = useState("Opex/Capex Retirement");
  //variable for approved by
  const [approved_by, setApproved_by] = useState("authorizer");

  const [submittedData, setSubmittedData] = useState(null); // To store response or confirmation
  //recipient variables
  const [recipient, setRecipient] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [recipientIndex, setRecipientIndex] = useState(""); // Store index

  //recipients array
  const recipients = [
    { name: "Finance Department", email: "finance@example.com" },
    { name: "Branch Manager", email: "manager@example.com" },
    { name: "Human Resources", email: "hr@example.com" },
  ];

  //handles selecting recipients from drop down 
  const handleRecipientChange = (e) => {
    const index = e.target.value;
    setRecipientIndex(index);
    setRecipient(recipients[index] !== "" ? recipients[index].name : "");
    setRecipientEmail(index !== "" ? recipients[index].email : "");
  };

  useEffect(() => {
    if (recipient) {
      console.log(recipient, recipientEmail, recipientIndex);
    }
  }, [recipient]);
  const handleSubmit = async () => {
    console.log("running..........");

    //data to be added to the request db
    addRequestToDb(
      branch_name,
      department,
      payee_name,
      payee_account,
      null,
      null,
      narration,
      null,
      invoice_amount,
      cash_advance,
      less_what,
      refund_reimbursement,
      request_type,
      approved_by
    );

    const data = {
      department,
      request_type,
      branch_name,
      payee_name,
      payee_account,
      invoice_amount,
      cash_advance,
      refund_reimbursement,
      narration,
      less_what,
      amount,
    };

    console.log(data);

    try {
      let response = await fetch(
        "https://mail-setup.onrender.com/opexcapexretirement",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setSubmittedData(result);
      console.log("Data submitted successfully:", result);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  useEffect(() => {
    if (submittedData) {
      console.log("Data successfully submitted:", submittedData);
    }
  }, [submittedData]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      <div className="container mx-auto mt-8 px-4 flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8 bg-gray-50 text-gray-800 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-6">Opex/Capex Retirement</h3>

          {/* Consolidated Form */}
          <form className="space-y-8 bg-white p-4 md:p-8 rounded shadow-md">
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <div>
                <label htmlFor="branch" className="block mb-2 font-medium">
                  Branch:
                </label>
                <input
                  type="text"
                  id="branch"
                  name="branch"
                  className="w-full border border-gray-300 rounded p-2"
                  required
                  onChange={(e) => setBranchName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="department" className="block mb-2 font-medium">
                  Department:
                </label>
                <input
                  type="text"
                  id="department"
                  name="department"
                  className="w-full border border-gray-300 rounded p-2"
                  required
                  onChange={(e) => setDepartment(e.target.value)}
                />
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <div>
                <label htmlFor="payeeName" className="block mb-2 font-medium">
                  Payee Name:
                </label>
                <input
                  type="text"
                  id="payeeName"
                  name="payeeName"
                  className="w-full border border-gray-300 rounded p-2"
                  required
                  onChange={(e) => setPayeeName(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="payeeAccount"
                  className="block mb-2 font-medium"
                >
                  Payee Account:
                </label>
                <input
                  type="text"
                  id="payeeAccount"
                  name="payeeAccount"
                  className="w-full border border-gray-300 rounded p-2"
                  required
                  onChange={(e) => setPayeeAccount(e.target.value)}
                />
              </div>
            </div>

            {/* Third Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <div>
                <label
                  htmlFor="invoiceAmount"
                  className="block mb-2 font-medium"
                >
                  Invoice Amount:
                </label>
                <input
                  type="text"
                  id="invoiceAmount"
                  name="invoiceAmount"
                  className="w-full border border-gray-300 rounded p-2"
                  required
                  onChange={(e) => setInvoiceAmount(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="cashAdvance" className="block mb-2 font-medium">
                  Cash Advance:
                </label>
                <input
                  type="text"
                  id="cashAdvance"
                  name="cashAdvance"
                  className="w-full border border-gray-300 rounded p-2"
                  onChange={(e) => setCashAdvance(e.target.value)}
                />
              </div>
            </div>

            {/* Narration */}
            <div>
              <label htmlFor="narration" className="block mb-2 font-medium">
                Narration:
              </label>
              <textarea
                id="narration"
                name="narration"
                className="w-full border border-gray-300 rounded p-2"
                rows="4"
                required
                onChange={(e) => setNarration(e.target.value)}
              ></textarea>
            </div>

            {/* Refund and Less What */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <div>
                <label htmlFor="refund" className="block mb-2 font-medium">
                  Refund/Reimbursement:
                </label>
                <input
                  type="text"
                  id="refund"
                  name="refund"
                  className="w-full border border-gray-300 rounded p-2"
                  onChange={(e) => setRefundReimbursement(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="lessWhat" className="block mb-2 font-medium">
                  Less What (if any):
                </label>
                <input
                  type="text"
                  id="lessWhat"
                  name="lessWhat"
                  className="w-full border border-gray-300 rounded p-2"
                  onChange={(e) => setLessWhat(e.target.value)}
                />
              </div>
            </div>

            {/* Amount */}
            <div>
              <label htmlFor="amount" className="block mb-2 font-medium">
                Amount:
              </label>
              <input
                type="text"
                id="amount"
                name="amount"
                className="w-full border border-gray-300 rounded p-2"
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            {/* File Upload */}
            <div>
              <label htmlFor="receipt" className="block mb-2 font-medium">
                Upload Receipt:
              </label>
              <input
                type="file"
                id="receipt"
                name="receipt"
                className="block w-full"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleSubmit}
              >
                ORIGINATE
              </button>
              <button
                type="button"
                className="hidden px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                RETURN
              </button>
              <button
                type="button"
                className="px-4 hidden py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                AUTHORIZE
              </button>
              <button
                type="button"
                className="px-4 py-2 hidden bg-red-500 text-white rounded hover:bg-red-600"
              >
                REJECT
              </button>
              <button
                type="button"
                className="px-4 py-2 hidden bg-yellow-500 text-white rounded hover:bg-yellow-600"
              >
                REQUEST PAYMENT
              </button>
              <button
                type="button"
                className="px-4 py-2 hidden bg-purple-500 text-white rounded hover:bg-purple-600"
              >
                SEND CASH
              </button>
            </div>
          </form>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
