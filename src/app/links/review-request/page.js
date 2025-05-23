"use client";

import Header from "@/app/components/Header"; // Adjust path as needed
import Footer from "@/app/components/Footer"; // Adjust path as needed
import Sidebar from "@/app/components/SideBar"; // Adjust path as needed
import { useState, useEffect } from "react";
import { updateApprovedBy, getAllRequests, getRequestsByRole, getRequestsByEmail } from "@/app/appwriteFunctions";
import { notifyUser } from "@/app/functions";

export default function ReviewRequest() {
  // State variables
  const [expandedId, setExpandedId] = useState(null);
  const [requests, setRequests] = useState(null);
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState(""); // "AUTHORIZE" or "RETURN"
  const [comment, setComment] = useState(""); // User's comment
  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track auth status
  const [email, setEmail] = useState(""); // User email
  const [password, setPassword] = useState(""); // User password
  const [error, setError] = useState(""); // Error message for invalid login
  const [role, setRole] = useState(""); // User role
  // Request ID to handle
  const [requestID, setRequestID] = useState(null);

  // Array holding roles in the system
  const roleArray = [
    "officer",
   "authorizer",
   "reviewer",
    "approver", 
    "Account"
  ];

  //recipient variables
    const [recipients, setRecipients] = useState("");
    const [recipientEmail, setRecipientEmail] = useState("email@ekondomfb.com");
    const [recipientIndex, setRecipientIndex] = useState(""); // Store index

  //array of recipients and roles
  const recipient = [
    {
      role: "officer",
      recipients: [
        { name: "Finance Department", email: "amanimeshiet@gmail.com" },
        { name: "Branch Manager", email: "emmanatesynergy@gmail.com" },
        { name: "Human Resources", email: "starkly.upcycle@gmail.com" }
      ]
    },
    {
      role: "authorizer",
      recipients: [
        { name: "Finance Department", email: "amanimeshiet@gmail.com" },
        { name: "Branch Manager", email: "emmanatesynergy@gmail.com" },
        { name: "Human Resources", email: "starkly.upcycle@gmail.com" }
      ]
    },
    {
      role: "reviewer",
      recipients: [
        { name: "Finance Department", email: "amanimeshiet@gmail.com" },
        { name: "Branch Manager", email: "emmanatesynergy@gmail.com" },
        { name: "Human Resources", email: "starkly.upcycle@gmail.com" }
      ]
    },
    {
      role: "approver",
      recipients: [
        { name: "Finance Department", email: "amanimeshiet@gmail.com" },
        { name: "Branch Manager", email: "emmanatesynergy@gmail.com" },
        { name: "Human Resources", email: "starkly.upcycle@gmail.com" }
      ]
    },
    {
      role: "account",
      recipients: [
        { name: "Finance Department", email: "amanimeshiet@gmail.com" },
        { name: "Branch Manager", email: "emmanatesynergy@gmail.com" },
        { name: "Human Resources", email: "starkly.upcycle@gmail.com" }
      ]
    }
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

  // Function to handle authorization
  const handleAuthorization = () => {
    console.log("Authorization is running .......");
    notifyUser(requestID);
    updateApprovedBy(requestID);
    setIsModalOpen(false);
    //window.location.reload()
  };

  // Function to format items
  function formatItems(items) {
    if (items ==! null){
    return items
      .map((item) => ` - ${item.item}: ${item.description}\n`)
      .join(",   ");
  }
}

  // Fetch all requests when role changes
  useEffect(() => {
    if (role !== null) {
      async function fetchRequests() {
        try {
          const response = await getAllRequests();
          const { documents } = response; // Destructure only the documents

          if (Array.isArray(documents)) {
            // Ensure documents is an array and set it
          } else {
            console.error("Error: documents is not an array");
            setRequests([]); // Set an empty array as a fallback
          }
        } catch (error) {
          console.error("Error fetching requests:", error);
          setRequests([]); // Set an empty array in case of an error
        }
      }

      fetchRequests();
    }
  }, [role]);

  // Fetch requests by email on component mount
  useEffect(() => {
    async function fetchRequests() {
      try {
        const response = await getRequestsByEmail();
        const { documents } = response; // Destructure only the documents

        console.log("request by role is running .......");
        console.log(response);

        if (Array.isArray(documents)) {
          setRequests(documents); // Ensure documents is an array and set it
        } else {
          console.error("Error: documents is not an array");
          setRequests([]); // Set an empty array as a fallback
        }
      } catch (error) {
        console.error("Error fetching requests:", error);
        setRequests([]); // Set an empty array in case of an error
      }
    }
    fetchRequests();
  }, []);

  // Handle action button click
  const handleActionClick = (action, requestID) => {
    console.log(requestID);
    setRequestID(requestID);
    setModalAction(action);
    setIsModalOpen(true);
  };

  // Handle comment submission
  const handleSubmitComment = () => {
    console.log(`Action: ${modalAction}, Comment: ${comment}`);
    // Handle the comment submission logic here (e.g., send to API)
    setIsModalOpen(false);
    setComment("");
  };

  // Handle role confirmation
  const handleRole = (e) => {
    e.preventDefault();
    if (email && password) {
      // Simulate setting a role (replace with actual API logic)
      setRole("admin"); // Example role
    } else {
      alert("Please enter both email and password.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      <div className="container mx-auto mt-8 flex-col md:flex-row gap-8 px-4 flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 bg-gray-50 p-8">
          <h3 className="text-2xl text-black font-semibold mb-6 ml-4">
            Review Request
          </h3>

          <ul className="max-w-lg divide-y text-black">
            {requests?.map((request) => (
              <li
                key={request.$id}
                className="w-full cursor-pointer transition-all duration-200"
                onClick={() =>
                  setExpandedId(expandedId === request.$id ? null : request.$id)
                }
              >
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {request.payee_name
                          ? request.payee_name.charAt(0).toUpperCase() +
                            request.payee_name.slice(1).toLowerCase()
                          : ""}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        {request.branch
                          ? request.branch.charAt(0).toUpperCase() +
                            request.branch.slice(1).toLowerCase()
                          : ""}
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
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-up"
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
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M6 9l6 6l6 -6" />
                        </svg>
                      )}
                    </div>
                  </div>

                  {expandedId === request.$id && (
                    <div className="mt-4 p-4 gap-4 bg-gray-50 rounded-lg">
                      {/* Branch */}
                      <p className="text-sm text-gray-700">
                        {request.branch ? "Branch: " + request.branch : ""}
                      </p>

                      {/* Department */}
                      <p className="text-sm text-gray-700">
                        {request.department
                          ? "Department: " + request.department
                          : ""}
                      </p>

                      {/* Payee Name */}
                      <p className="text-sm text-gray-700">
                        {request.payee_name
                          ? "Payee Name: " + request.payee_name
                          : ""}
                      </p>

                      {/* Payee Account */}
                      <p className="text-sm text-gray-700">
                        {request.payee_account
                          ? "Payee Account: " + request.payee_account
                          : ""}
                      </p>

                      {/* Items */}
                      <p className="text-sm text-gray-700">
                        {request.items
                          ? "Items: " + formatItems(JSON.parse(request.items))
                          : ""}
                      </p>

                      {/* Description */}
                      <p className="text-sm text-gray-700">
                        {request.description
                          ? "Description: " + request.description
                          : ""}
                      </p>

                      {/* Narration */}
                      <p className="text-sm text-gray-700">
                        {request.narration
                          ? "Narration: " + request.narration
                          : ""}
                      </p>

                       {/* Approved BY */}
                       <p className="text-sm text-gray-700">
                        {request.approved_by
                          ? "To Be Approved By: " + request.approved_by
                          : "Approved By: "}
                      </p>

                      {/* Total Amount */}
                      <p className="text-sm  text-gray-700">
                        {request.total_amount
                          ? "Total Amount: " + request.total_amount
                          : ""}
                      </p>

                      {/* Invoice Amount */}
                      <p className="text-sm text-gray-700">
                        {request.invoice_amount
                          ? "Invoice Amount: " + request.invoice_amount
                          : ""}
                      </p>

                      {/* Cash Advance */}
                      <p className="text-sm text-gray-700">
                        {request.cash_advance
                          ? "Cash Advance: " + request.cash_advance
                          : ""}
                      </p>

                      {/* Less What */}
                      <p className="text-sm text-gray-700">
                        {request.less_what
                          ? "Less What: " + request.less_what
                          : ""}
                      </p>

                      {/* Refund Reimbursement */}
                      <p className="text-sm text-gray-700">
                        {request.refund_reimbursement
                          ? "Refund/Reimbursement: " +
                            request.refund_reimbursement
                          : ""}
                      </p>

                      <div className="flex flex-wrap gap-4 mt-10">
                        <button
                          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                          onClick={() => handleActionClick("AUTHORIZE", request.$id)}
                        >
                          AUTHORIZE
                        </button>
                        <button
                          className="px-4 py-2 bg-gray-500 text-white  rounded hover:bg-gray-600"
                          onClick={() => handleActionClick("RETURN", request.$id)}
                        >
                          RETURN
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </main>
      </div>

      {/* Footer */}
      <Footer />

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            {modalAction === "RETURN" && (
              <>
                <h2 className="text-lg text-gray-700 font-semibold mb-4">
                  Add Comment for Return
                </h2>
                <textarea
                  className="w-full p-2 text-gray-700 border border-gray-800 rounded mb-4"
                  rows="4"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Add your comment here..."
                ></textarea>
                <div className="flex justify-end gap-4">
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleSubmitComment}
              >
                Submit
              </button>
            </div>
              </>
            )}

            {modalAction === "AUTHORIZE" && (
              <>
                <h2 className="text-lg text-gray-700 font-semibold mb-4">
                  CONFIRM AUTHORIZATION
                </h2>
                {
                // Add any additional information or instructions here
                // recipient list using roles
                }
                <label className="block text-gray-700 mt-4 mb-1">Recipient:</label>
            <select
              className="w-full p-2 border mb-4 text-gray-700 border-gray-500 rounded"
              value={recipientIndex}
              onChange={handleRecipientChange}
            >
              <option value=""> Choose the recipient</option>
              {recipient.map((rec, index) => (
                <option key={index} value={index}>
                  {rec.name}
                </option>
              ))}
            </select>

                <div className="flex justify-end gap-4">
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={ () => handleAuthorization()}
              >
                Submit
              </button>
            </div>
              </>
            )}

            
          </div>
        </div>
      )}
    </div>
  );
}
