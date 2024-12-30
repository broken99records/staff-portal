'use client'

import { useState, useEffect } from "react";

const SideBar = () => {
  const menuItems = [
    { href: "../links/petty-cash-advance", label: "Petty Cash Advance" },
    { href: "../links/cash-retirement", label: "Petty Cash Retirement" },
    { href: "../links/cash-advance", label: "Cash Advance" },
    { href: "../links/opex", label: "Opex/Capex Retirement" },
    { href: "../links/stationery-request", label: "Stationery Request" },
    { href: "../links/review-request", label: "Review Request" },
  ];

  const [currentPath, setCurrentPath] = useState("");
 

  useEffect(() => {
    // Check if the code is running on the client side
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  return (
    <aside className="w-full md:w-1/4 bg-gray-100 shadow-md p-6 rounded-lg">
      {/*<h2 className="text-lg text-gray-800 font-bold mb-4">Expense Options</h2>*/}
      <ul className="space-y-4">
        {menuItems.map((item, index) => {
          const isActive = currentPath.includes(item.href.replace("..", ""));
         // console.log("comparing path to href... "+ "currentPath:  " + currentPath + " "+ " href:  " + item.href)
          return (
            <li key={index}>
              <a
                href={item.href}
                className={`
                  ${
                    isActive
                      ? "bg-green-500 text-white px-2 py-2 rounded-md inline-block w-full hover:bg-green-600"
                      : "text-gray-600 hover:text-gray-800 border-gray-200 rounded-md inline-block w-full"
                  }
                `}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default SideBar;
