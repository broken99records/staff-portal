"use client"

import Header from '@/app/components/Header'; // Adjust path as needed
import Footer from '@/app/components/Footer'; // Adjust path as needed
import Sidebar from '@/app/components/SideBar'; // Adjust path as needed
import { useState, useEffect } from 'react';
import { addItemsToDb } from '@/app/appwriteFunctions';

export default function StationeryRequest() {
  //state variables
  const [branch, setBranch] = useState('');
  const [department, setDepartment] = useState('');
  
  const [items, setItems] = useState([{ item: "", description: "" }]);

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


  //functions
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

  const handleSubmit = () =>{
    console.log(typeof(JSON.stringify((items))))
    addItemsToDb(items)
  }



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

          {/* Dynamic Items Section */}
          {items.map((item, index) => (
            <div
              key={index}
              className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div>
                <label className="block text-gray-700 mb-1">
                  Description {index + 1}:
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={item.item}
                  onChange={(e) =>
                    handleItemChange(index, "item", e.target.value)
                  }
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">
                  Quantity {index + 1}:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
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


          <div className="flex flex-wrap gap-4">
            <button
             className="px-4 py-2 mt-4 bg-green-500 text-white rounded hover:bg-blue-600"
             onClick={handleSubmit}
             >
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
