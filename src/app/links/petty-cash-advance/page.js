import Header from "@/app/components/Header";
import SideBar from "@/app/components/SideBar";
import Image from "next/image";
import Link from "next/link";

const PettyCashAdvance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header/>

      {/* Content Section */}
      <main className="container mx-auto mt-8 flex flex-col md:flex-row gap-8 px-4">
        {/* Sidebar */}
        <SideBar/>
        {/* Form Section */}
        <section className="w-full md:w-3/4 bg-white shadow-lg p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6">Petty Cash Advance</h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-1">Branch:</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter branch name"
              />
              <label className="block text-gray-700 mt-4 mb-1">Payee Name:</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter payee name"
              />
              <label className="block text-gray-700 mt-4 mb-1">Item:</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter item"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Department:</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter department"
              />
              <label className="block text-gray-700 mt-4 mb-1">Payee Account:</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter account"
              />
              <label className="block text-gray-700 mt-4 mb-1">Description:</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter description"
              />
            </div>
          </form>
          <div className="mt-6">
            <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
              Add Item
            </button>
          </div>
          <label className="block text-gray-700 mt-6 mb-1">Total Amount:</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter total amount"
          />
          <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
              Originate
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
              Authorize
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
              Reject
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
              Approve
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-auto">
        <div className="container mx-auto text-center">
          <p>&copy; Ekondo Staff Portal 2024</p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link href="https://www.facebook.com/ekondomfb/about">
              <Image src="/assets/facebook.png" alt="Facebook" width={24} height={24} />
            </Link>
            <Link href="https://x.com/ekondomfb">
              <Image src="/assets/twitter.png" alt="Twitter" width={24} height={24} />
            </Link>
            <Link href="https://www.linkedin.com/in/ekondo-bank-40a666155">
              <Image src="/assets/linkedin.png" alt="LinkedIn" width={24} height={24} />
            </Link>
            <Link href="https://www.instagram.com/ekondomfb">
              <Image src="/assets/instagram.png" alt="Instagram" width={24} height={24} />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PettyCashAdvance;
