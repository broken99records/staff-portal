import Header from "@/app/components/Header";
import Sidebar from "@/app/components/SideBar";
import Footer from "@/app/components/Footer";

const PettyCashRetirement = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      <div className="container mx-auto mt-8 flex-col md:flex-row gap-8 px-4 flex">
        {/* Sidebar */}
       
          <Sidebar />
       

         {/* Main Form */}
         <div className="flex-1 p-4">
            <h3 className="text-2xl font-semibold mb-4">Petty Cash Retirement</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="branch" className="block">Branch</label>
                  <input type="text" id="branch" className="w-full p-2 border-gray-300 border rounded" />
                </div>
                <div>
                  <label htmlFor="payeeName" className="block">Payee Name</label>
                  <input type="text" id="payeeName" className="w-full p-2 border rounded border-gray-300" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="item" className="block">Item</label>
                  <input type="text" id="item" className="w-full p-2 border rounded border-gray-300" />
                </div>
                <div>
                  <label htmlFor="amount" className="block">Amount</label>
                  <input type="text" id="amount" className="w-full p-2 border rounded border-gray-300" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="department" className="block">Department</label>
                  <input type="text" id="department" className="w-full p-2 border rounded border-gray-300" />
                </div>
                <div>
                  <label htmlFor="payeeAccount" className="block">Payee Account</label>
                  <input type="text" id="payeeAccount" className="w-full p-2 border rounded border-gray-300" />
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block">Description</label>
                <input type="text" id="description" className="w-full p-2 border rounded border-gray-300" />
              </div>

              <div>
                <label htmlFor="totalAmount" className="block">Total Amount</label>
                <input type="text" id="totalAmount" className="w-full p-2 border rounded border-gray-300" />
              </div>

              <div>
                <label htmlFor="receipt" className="block">Upload Receipt</label>
                <input type="file" id="receipt" className=" p-2 border rounded border-gray-300" />
              </div>

              <div className="mt-6 flex space-x-4">
                <button className="bg-blue-500 text-white py-2 px-4 rounded">Originate</button>
                <button className="bg-gray-500 text-white py-2 px-4 rounded">Return</button>
                <button className="bg-yellow-500 text-white py-2 px-4 rounded">Authorize</button>
                <button className="bg-green-500 text-white py-2 px-4 rounded">Approve</button>
              </div>
            </form>
            </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PettyCashRetirement;
