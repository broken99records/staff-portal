"use client";

import Header from "@/app/components/Header";
import Sidebar from "@/app/components/SideBar";
import Footer from "@/app/components/Footer";
import { useState, useEffect } from "react";
import { addRequestToDb } from "@/app/appwriteFunctions";

const PettyCashRetirement = () => {
  const [request_type, setRequest_type] = useState("Cash Retirement");
  const [branch_name, setBranchName] = useState("test");
  const [payee_name, setPayeeName] = useState("test");
  const [items, setItems] = useState("test");
  const [amount, setAmount] = useState("test");
  const [department, setDepartment] = useState("test");
  const [payee_account, setPayeeAccount] = useState("test");
  const [description, setDescription] = useState("this is a test");
  const [total_amount, setTotalAmount] = useState("44444444555556666");
  const [submittedData, setSubmittedData] = useState(null); // To store response or confirmation
  const [approved_by, setApproved_by] = useState("authorizer"); // To store response or confirmation
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
      items,
      description,
      null,
      total_amount,
      null,
      null,
      null,
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
      items,
      amount,
      description,
      total_amount,
      recipientEmail,
    };

   // console.log(data); // Testing

    // Send POST request when form is submitted
    try {
      let response = await fetch(
        "https://mail-setup.onrender.com/pettycashretirement",
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

        {/* Main Form */}
        <div className="flex-1 p-4 text-gray-700 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Petty Cash Retirement</h3>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="branch" className="block">
                  Branch
                </label>
                <input
                  type="text"
                  id="branch"
                  className="w-full p-2 border-gray-400 border rounded"
                  onChange={(e) => setBranchName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="payeeName" className="block">
                  Payee Name
                </label>
                <input
                  type="text"
                  id="payeeName"
                  className="w-full p-2 border rounded border-gray-400"
                  onChange={(e) => setPayeeName(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="item" className="block">
                  Item
                </label>
                <input
                  type="text"
                  id="item"
                  className="w-full p-2 border rounded border-gray-400"
                  onChange={(e) => setItems(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="amount" className="block">
                  Amount
                </label>
                <input
                  type="text"
                  id="amount"
                  className="w-full p-2 border rounded border-gray-400"
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="department" className="block">
                  Department
                </label>
                <input
                  type="text"
                  id="department"
                  className="w-full p-2 border rounded border-gray-400"
                  onChange={(e) => setDepartment(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="payeeAccount" className="block">
                  Payee Account
                </label>
                <input
                  type="text"
                  id="payeeAccount"
                  className="w-full p-2 border rounded border-gray-400"
                  onChange={(e) => setPayeeAccount(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block">
                Description
              </label>
              <input
                type="text"
                id="description"
                className="w-full p-2 border rounded border-gray-400 text-gray-800"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="totalAmount" className="block">
                Total Amount
              </label>
              <input
                type="text"
                id="totalAmount"
                className="w-full p-2 border rounded border-gray-400"
                onChange={(e) => setTotalAmount(e.target.value)}
              />
            </div>

            <div>
            <label className="block text-gray-700 mt-4 mb-1">Recipient:</label>
          <select
            className="w-full p-2 mb-4 border text-gray-700 border-gray-500 rounded"
            value={recipientIndex}
            onChange={handleRecipientChange}
          >
            <option value="">Choose The Recipient</option>
            {recipients.map((rec, index) => (
              <option key={index} value={index}>
                {rec.name}
              </option>
            ))}
          </select>
          </div>

            <div>
              <label htmlFor="receipt" className="block">
                Upload Receipt
              </label>
              <input
                type="file"
                id="receipt"
                className=" p-2 border rounded border-gray-400"
              />
            </div>

            <div className="mt-6 flex space-x-4">
              <button
                type="submit"
                className="bg-green-500 text-white py-2 px-4 rounded"
                onClick={() => handleSubmit()}
              >
                Originate
              </button>
              <button className=" hidden bg-gray-500 text-white py-2 px-4 rounded">
                Return
              </button>
              <button className="hidden bg-yellow-500 text-white py-2 px-4 rounded">
                Authorize
              </button>
              <button className="bg-green-500 text-white py-2 px-4 rounded hidden">
                Approve
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PettyCashRetirement;
