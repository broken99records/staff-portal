import Header from "@/app/components/Header"; // Adjust path as needed
import Footer from "@/app/components/Footer"; // Adjust path as needed
import Sidebar from "@/app/components/SideBar"; // Adjust path as needed

export default function Opex() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <Header />

            <div className="container mx-auto mt-8 flex-col md:flex-row gap-8 px-4 flex ">
                {/* Sidebar */}
                <Sidebar />

                {/* Main Content */}
                <main className="flex-1 p-8 bg-gray-50 text-gray-800 rounded-lg shadow-md ">
                    <h3 className="text-2xl font-bold mb-6">Opex/Capex Retirement</h3>

                    {/* Consolidated Form */}
                    <form className="space-y-8 bg-white p-8 rounded shadow-md" method="POST">
                        {/* First Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <label htmlFor="branch" className="block mb-2 font-medium">Branch:</label>
                                <input
                                    type="text"
                                    id="branch"
                                    name="branch"
                                    className="w-full border border-gray-300 rounded p-2"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="department" className="block mb-2 font-medium">Department:</label>
                                <input
                                    type="text"
                                    id="department"
                                    name="department"
                                    className="w-full border border-gray-300 rounded p-2"
                                    required
                                />
                            </div>
                        </div>

                        {/* Second Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <label htmlFor="payeeName" className="block mb-2 font-medium">Payee Name:</label>
                                <input
                                    type="text"
                                    id="payeeName"
                                    name="payeeName"
                                    className="w-full border border-gray-300 rounded p-2"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="payeeAccount" className="block mb-2 font-medium">Payee Account:</label>
                                <input
                                    type="text"
                                    id="payeeAccount"
                                    name="payeeAccount"
                                    className="w-full border border-gray-300 rounded p-2"
                                    required
                                />
                            </div>
                        </div>

                        {/* Third Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <label htmlFor="invoiceAmount" className="block mb-2 font-medium">Invoice Amount:</label>
                                <input
                                    type="text"
                                    id="invoiceAmount"
                                    name="invoiceAmount"
                                    className="w-full border border-gray-300 rounded p-2"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="cashAdvance" className="block mb-2 font-medium">Cash Advance:</label>
                                <input
                                    type="text"
                                    id="cashAdvance"
                                    name="cashAdvance"
                                    className="w-full border border-gray-300 rounded p-2"
                                />
                            </div>
                        </div>

                        {/* Narration */}
                        <div>
                            <label htmlFor="narration" className="block mb-2 font-medium">Narration:</label>
                            <textarea
                                id="narration"
                                name="narration"
                                className="w-full border border-gray-300 rounded p-2"
                                rows="4"
                                required
                            ></textarea>
                        </div>

                        {/* Refund and Less What */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <label htmlFor="refund" className="block mb-2 font-medium">Refund/Reimbursement:</label>
                                <input
                                    type="text"
                                    id="refund"
                                    name="refund"
                                    className="w-full border border-gray-300 rounded p-2"
                                />
                            </div>
                            <div>
                                <label htmlFor="lessWhat" className="block mb-2 font-medium">Less What (if any):</label>
                                <input
                                    type="text"
                                    id="lessWhat"
                                    name="lessWhat"
                                    className="w-full border border-gray-300 rounded p-2"
                                />
                            </div>
                        </div>

                        {/* Amount */}
                        <div>
                            <label htmlFor="amount" className="block mb-2 font-medium">Amount:</label>
                            <input
                                type="text"
                                id="amount"
                                name="amount"
                                className="w-full border border-gray-300 rounded p-2"
                            />
                        </div>

                        {/* File Upload */}
                        <div>
                            <label htmlFor="receipt" className="block mb-2 font-medium">Upload Receipt:</label>
                            <input
                                type="file"
                                id="receipt"
                                name="receipt"
                                className="block w-full"
                            />
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                ORIGINATE
                            </button>
                            <button
                                type="button"
                                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                            >
                                RETURN
                            </button>
                            <button
                                type="button"
                                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                            >
                                AUTHORIZE
                            </button>
                            <button
                                type="button"
                                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                            >
                                REJECT
                            </button>
                            <button
                                type="button"
                                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                            >
                                REQUEST PAYMENT
                            </button>
                            <button
                                type="button"
                                className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
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
