import Link from "next/link";

const SideBar = () => {
  const menuItems = [
    { href: "../links/petty-cash-advance", label: "Petty Cash Advance" },
    { href: "../links/cash-retirement", label: "Petty Cash Retirement" },
    { href: "../links/cash-advance", label: "Cash Advance" },
    { href: "../links/opex", label: "Opex/Capex Retirement" },
    { href: "../links/stationery-request", label: "Stationery Request" },
    { href: "../links/review-request", label: "Review Request" },
  ];

  return (
    <aside className="w-full md:w-1/4 bg-gray-100 shadow-md p-6 rounded-lg">
      <h2 className="text-lg text-gray-800 font-bold mb-4">Expense Options</h2>
      <ul className="space-y-4">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link href={item.href} className="text-blue-600 hover:text-blue-800">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
