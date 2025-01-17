"use client"

import { getRole } from '@/app/appwriteFunctions';
import { useEffect, useState } from 'react';

const PettyCashAdvance = () => {
  const [request_type, setRequest_type] = useState("Petty Cash Advance");
  const [department, setDepartment] = useState("");
  const [branch_name, setBranchName] = useState("");
  const [payee_name, setPayeeName] = useState("");
  const [payee_account, setPayeeAccount] = useState("");
  const [total_amount, setTotalAmount] = useState("");
  const [items, setItems] = useState([{ item: "", description: "" }]);
  const [submittedData, setSubmittedData] = useState(null);

  const [role, setRole] = useState(null)

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
    const data = {
      branch_name,
      request_type,
      department,
      payee_name,
      payee_account,
      items: items.map(item => item.item),
      description: items[0].description,
      total_amount,
    };

    try {
      const response = await fetch("https://mail-setup.onrender.com/pettycashadvance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const result = await response.json();
      setSubmittedData(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    async function fetchRole() {
      try {
        const userRole = await getRole();
        setRole(userRole);
      } catch (err) {
        console.error("Error fetching role:", err.message);
        setError("Unable to fetch role.");
      }
    }

    fetchRole();
  }, []);

  

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-white shadow-md p-4">
        <h1 className="text-2xl font-bold text-gray-800">Staff Portal</h1>
      </header>

      <main className="container mx-auto mt-8 flex flex-col md:flex-row gap-8 px-4">
        <nav className="w-full md:w-1/4 bg-white shadow-lg rounded-lg h-fit p-4">
          <ul className="space-y-2">
            <li className="p-2 bg-blue-100 rounded text-blue-800 font-medium">Petty Cash Advance</li>
            <li className="p-2 hover:bg-gray-100 rounded cursor-pointer">Dashboard</li>
            <li className="p-2 hover:bg-gray-100 rounded cursor-pointer">Requests</li>
            <li className="p-2 hover:bg-gray-100 rounded cursor-pointer">Settings</li>
          </ul>
        </nav>

        <section className="w-full md:w-3/4 bg-white shadow-lg p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-gray-700">Petty Cash Advance</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-1">Branch:</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                onChange={(e) => setBranchName(e.target.value)}
              />
              <label className="block text-gray-700 mt-4 mb-1">Payee Name:</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                onChange={(e) => setPayeeName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Department:</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                onChange={(e) => setDepartment(e.target.value)}
              />
              <label className="block text-gray-700 mt-4 mb-1">Payee Account:</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                onChange={(e) => setPayeeAccount(e.target.value)}
              />
            </div>
          </div>

          {items.map((item, index) => (
            <div key={index} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-1">Item {index + 1}:</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={item.item}
                  onChange={(e) => handleItemChange(index, 'item', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Description {index + 1}:</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                    value={item.description}
                    onChange={(e) => handleItemChange(index, 'description', e.target.value)}
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
            className="w-full p-2 border border-gray-300 rounded"
            onChange={(e) => setTotalAmount(e.target.value)}
          />

          <div className="flex flex-wrap gap-4 mt-8">
            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
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

      <footer className="bg-gray-800 text-white py-6 mt-auto">
        <div className="container mx-auto text-center">
          <p>&copy; Ekondo Staff Portal 2024</p>
          <div className="flex justify-center space-x-4 mt-4">
            <div className="w-6 h-6 bg-white rounded-full"></div>
            <div className="w-6 h-6 bg-white rounded-full"></div>
            <div className="w-6 h-6 bg-white rounded-full"></div>
            <div className="w-6 h-6 bg-white rounded-full"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PettyCashAdvance;