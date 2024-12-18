import Header from "@/app/components/Header"; // Adjust path as needed
import Footer from "@/app/components/Footer"; // Adjust path as needed
import Sidebar from "@/app/components/SideBar"; // Adjust path as needed
import Link from "next/link";

export default function ReviewRequest() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      <div className="container mx-auto mt-8 flex-col md:flex-row gap-8 px-4 flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 bg-gray-50 p-8">
          <h3 className="text-2xl font-semibold mb-6 ml-4">Review Request</h3>

          <ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
            <li class="pb-3 sm:pb-4">
              <div class="flex items-center space-x-4 rtl:space-x-reverse">
                <div class="flex-shrink-0">
                  
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Neil Sims
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    email@flowbite.com
                  </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  $320
                </div>
              </div>
            </li>
            <li class="py-3 sm:py-4">
              <div class="flex items-center space-x-4 rtl:space-x-reverse">
                <div class="flex-shrink-0">
                  
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Bonnie Green
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    email@flowbite.com
                  </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  $3467
                </div>
              </div>
            </li>
            <li class="py-3 sm:py-4">
              <div class="flex items-center space-x-4 rtl:space-x-reverse">
                <div class="flex-shrink-0">
                  
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Michael Gough
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    email@flowbite.com
                  </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  $67
                </div>
              </div>
            </li>
            <li class="py-3 sm:py-4">
              <div class="flex items-center space-x-4 rtl:space-x-reverse">
                <div class="flex-shrink-0">
                  
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Thomas Lean
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    email@flowbite.com
                  </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  $2367
                </div>
              </div>
            </li>
            <li class="pt-3 pb-0 sm:pt-4">
              <div class="flex items-center space-x-4 rtl:space-x-reverse">
                <div class="flex-shrink-0">
                  
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Lana Byrd
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    email@flowbite.com
                  </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  $367
                </div>
              </div>
            </li>
          </ul>

          <div className="flex flex-wrap gap-4 mt-10">
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              AUTHORIZE
            </button>
            <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
              RETURN
            </button>           
            <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
              REJECT
            </button>
            <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
              REQUEST PAYMENT
            </button>
            <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
              SEND CASH
            </button>
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              DELIVERY
            </button>
            
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
