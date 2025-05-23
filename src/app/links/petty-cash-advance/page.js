"use client";

import Header from "@/app/components/Header";
import SideBar from "@/app/components/SideBar";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { addRequestToDb } from "@/app/appwriteFunctions";
import Footer from "@/app/components/Footer";
import LoadingSpinner from "@/app/components/loading";

const PettyCashAdvance = () => {
  // State variables
  const [request_type, setRequest_type] = useState("Petty Cash Advance");
  const [department, setDepartment] = useState("IT");
  const [branch_name, setBranchName] = useState("TEST");
  const [payee_name, setPayeeName] = useState("Ama");
  const [payee_account, setPayeeAccount] = useState(null);
  const [total_amount, setTotalAmount] = useState("test");
  const [description, setDescription] = useState(null);
  const [items, setItems] = useState([{ item: "", description: "" }]);
  const [approved_by, setApproved_by] = useState("authorizer"); // To store response or confirmation
  const [submittedData, setSubmittedData] = useState(null); // To store response or confirmation
  //loading variable
  const [loading, setloading] = useState(false);
  //
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

  // Function to handle item change
  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [field]: value };
    setItems(newItems);
  };

  const addItem = () => {
    setItems([...items, { item: "", description: "" }]);
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    console.log("running..........");
    setloading(true);

    //adds data to the request database
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
      approved_by
    );

    //data to be sent to email notification system
    const data = {
      branch_name,
      request_type,
      department,
      payee_name,
      payee_account,
      items: items,
      total_amount,
    };

    //console.log(data); //test

    try {
      let response = await fetch(
        "https://mail-setup.onrender.com/pettycashadvance",
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
      setloading(false);
      window.alert("Petty Cash Advance Submitted");
    } catch (error) {
      console.error("Error submitting data:", error);
      setloading(false);
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

      {/* Content Section */}
      <main className="container mx-auto mt-8 flex flex-col md:flex-row gap-8 px-4">
        {/* Sidebar */}
        <SideBar />
        {/* Form Section */}
        <section className="w-full md:w-3/4 bg-gray-50 shadow-lg p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-gray-700">
            Petty Cash Advance
          </h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-1">Branch:</label>
              <input
                type="text"
                className="w-full p-2 border text-gray-700 border-gray-300 rounded"
                placeholder="Enter branch name"
                onChange={(e) => setBranchName(e.target.value)}
              />
              <label className="block text-gray-700 mt-4 mb-1">
                Payee Name:
              </label>
              <input
                type="text"
                className="w-full p-2 border text-gray-700 border-gray-300 rounded"
                placeholder="Enter payee name"
                onChange={(e) => setPayeeName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Department:</label>
              <input
                type="text"
                className="w-full p-2 border text-gray-700 border-gray-300 rounded"
                placeholder="Enter department"
                onChange={(e) => setDepartment(e.target.value)}
              />
              <label className="block text-gray-700 mt-4 mb-1">
                Payee Account:
              </label>
              <input
                type="text"
                className="w-full p-2 border text-gray-700 border-gray-300 rounded"
                placeholder="Enter account"
                onChange={(e) => setPayeeAccount(e.target.value)}
              />
            </div>
          </form>

          {/* Dynamic Items Section */}
          {items.map((item, index) => (
            <div
              key={index}
              className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div>
                <label className="block text-gray-700 mb-1">
                  Item {index + 1}:
                </label>
                <input
                  type="text"
                  className="w-full p-2 border text-gray-700 border-gray-300 rounded"
                  value={item.item}
                  onChange={(e) =>
                    handleItemChange(index, "item", e.target.value)
                  }
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">
                  Description {index + 1}:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    className="w-full p-2 border text-gray-700 border-gray-300 rounded"
                    value={item.description}
                    onChange={(e) =>
                      handleItemChange(index, "description", e.target.value)
                    }
                  />
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => removeItem(index)}
                      className="bg-red-500 text-white px-3 rounded hover:bg-red-600"
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/*add item button*/}
          <div className="mt-6">
            <button
              type="button"
              onClick={addItem}
              className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
            >
              Add Item
            </button>
          </div>

          <label className="block text-gray-700 mt-6 mb-1">Total Amount:</label>
          <input
            type="text"
            className="w-full p-2 border text-gray-700 border-gray-300 rounded"
            placeholder="Enter total amount"
            onChange={(e) => setTotalAmount(e.target.value)}
          />

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

          <div className="flex flex-wrap gap-4 mt-8">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
              onClick={handleSubmit}
            >
              Originate
            </button>
            <button className="hidden bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
              Authorize
            </button>
            <button className="hidden bg-red-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
              Reject
            </button>
            <button className="hidden bg-gray-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
              Approve
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default PettyCashAdvance;
