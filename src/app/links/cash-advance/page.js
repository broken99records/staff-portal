"use client";

import Header from "@/app/components/Header"; // Adjust path as needed
import Footer from "@/app/components/Footer"; // Adjust path as needed
import Sidebar from "@/app/components/SideBar"; // Adjust path as needed
import { useEffect, useState } from "react";
import { addRequestToDb } from "@/app/appwriteFunctions"; //

export default function cash_advance() {
  // State variables
  const [department, setDepartment] = useState("IT");
  const [branch_name, setBranchName] = useState("head office");
  const [payee_name, setPayeeName] = useState("Ama");
  const [payee_account, setPayeeAccount] = useState("eshiet");
  const [invoice_amount, setInvoiceAmount] = useState("3344343334");
  const [cash_advance, setCashAdvance] = useState("34343434");
  const [narration, setNarration] = useState("hello world, this is a test");
  const [less_what, setLessWhat] = useState("3445554");
  const [amount, setAmount] = useState("4745848399");
  const [request_type, setRequest_type] = useState("Cash Advance");
  //variable for approved by
  const [approved_by, setApproved_by] = useState("authorizer");
  //might not need the following

  const [submittedData, setSubmittedData] = useState(null); // To store response or confirmation

  //recipient variables
  const [recipient, setRecipient] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("email@ekondomfb.com");
  const [recipientIndex, setRecipientIndex] = useState(""); // Store index

  //recipients array
  const recipients = [
    { name: "Finance Department", email: "amanimeshiet@gmail.com" },
    { name: "Branch Manager", email: "emmanatesynergy@gmail.com" },
    { name: "Human Resources", email: "starkly.upcycle@gmail.com" },
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

  // Function to handle form submission
  const handleSubmit = async () => {
    console.log("running..........");

    addRequestToDb(
      branch_name,
      department,
      payee_name,
      payee_account,
      null,
      null,
      null,
      amount,
      invoice_amount,
      cash_advance,
      less_what,
      null,
      request_type,
      approved_by,
      recipientEmail,
    );

    // Data to be sent in the POST request
    const data = {
      department,
      request_type,
      branch_name,
      payee_name,
      payee_account,
      invoice_amount,
      cash_advance,
      narration,
      less_what,
      amount,
      recipientEmail,
    };

    console.log(data); // Testing

    // Send POST request when form is submitted
    try {
      let response = await fetch(
        "https://mail-setup.onrender.com/cashadvance",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      // Check if the response is successful
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Parse the response JSON
      const result = await response.json();
      setSubmittedData(result); // Store response data
      console.log("Data submitted successfully:", result);
    } catch (error) {
      console.log("error at post method");
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

      <div className="container mx-auto mt-8 flex-col md:flex-row gap-8 px-4 flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 bg-gray-50 p-8 text-gray-700 rounded-lg shadow-md ">
          <h3 className="text-2xl font-semibold mb-6">Cash Advance</h3>

          <section className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <form>
                <label className="block mb-2 font-medium" htmlFor="branch_name">
                  Branch name:
                </label>
                <input
                  type="text"
                  id="branch name"
                  name="branch name"
                  className="w-full border border-gray-400 p-2 rounded"
                  onChange={(e) => setBranchName(e.target.value)}
                />

                <label
                  className="block mt-4 mb-2 font-medium"
                  htmlFor="payee_name"
                >
                  Payee Name:
                </label>
                <input
                  type="text"
                  id="payee_name"
                  name="payee_name"
                  className="w-full border border-gray-400 p-2 rounded"
                  onChange={(e) => setPayeeName(e.target.value)}
                />

                <label
                  className="block mt-4 mb-2 font-medium"
                  htmlFor="invoice_amount"
                >
                  Invoice Amount:
                </label>
                <input
                  type="text"
                  id="invoice_amount"
                  name="invoice_amount"
                  className="w-full border border-gray-400 p-2 rounded"
                  onChange={(e) => setInvoiceAmount(e.target.value)}
                />
              </form>
            </div>

            <div>
              <form>
                <label className="block mb-2 font-medium" htmlFor="department">
                  Department:
                </label>
                <input
                  type="text"
                  id="department"
                  name="department"
                  className="w-full border border-gray-400 p-2 rounded"
                  onChange={(e) => setDepartment(e.target.value)}
                />

                <label
                  className="block mt-4 mb-2 font-medium"
                  htmlFor="payee_account"
                >
                  Payee Account:
                </label>
                <input
                  type="text"
                  id="payee_account"
                  name="payee_account"
                  className="w-full border border-gray-400 p-2 rounded"
                  onChange={(e) => setPayeeAccount(e.target.value)}
                />

                <label
                  className="block mt-4 mb-2 font-medium"
                  htmlFor="cash_advance"
                >
                  Cash Advance:
                </label>
                <input
                  type="text"
                  id="cash_advance"
                  name="cash_advance"
                  className="w-full border border-gray-400 p-2 rounded"
                  onChange={(e) => setCashAdvance(e.target.value)}
                />
              </form>
            </div>
          </section>

          <form className="mb-8">
            <label className="block mb-2 font-medium" htmlFor="narration">
              Narration:
            </label>
            <input
              type="text"
              id="narration"
              name="narration"
              className="w-full border border-gray-400 p-2 rounded"
              onChange={(e) => setNarration(e.target.value)}
            />
          </form>

          <section className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <label className="block mb-2 font-medium" htmlFor="less_what">
                Less What (if any):
              </label>
              <input
                type="text"
                id="less_what"
                name="less_what"
                className="w-full border border-gray-400 p-2 rounded"
                onChange={(e) => setLessWhat(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-2 font-medium" htmlFor="amount">
                Amount:
              </label>
              <input
                type="text"
                id="amount"
                name="amount"
                className="w-full border border-gray-400 p-2 rounded"
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            
            
          </section>

          <label className="block text-gray-700 mt-4 mb-1">Recipient:</label>
            <select
              className="w-full p-2 border mb-4 text-gray-700 border-gray-500 rounded"
              value={recipientIndex}
              onChange={handleRecipientChange}
            >
              <option value=""> Choose the recipient      </option>
              {recipients.map((rec, index) => (
                <option key={index} value={index}>
                  {rec.name}
                </option>
              ))}
            </select>

          <form className="mb-8">
            <label
              className="block mb-2 font-medium"
              htmlFor="managementApproval"
            >
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
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={handleSubmit}
            >
              ORIGINATE
            </button>
            <button className=" hidden px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
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
