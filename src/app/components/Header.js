import Link from "next/link";
import Image from "next/image";
import LOGO from "@/app/assets/LOGO.png"; // Update the path as per your project structure


const Header = () => {
  return (
    <header className="bg-gray-100 shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href={'/login'}>
          <Image
            src={LOGO}
            alt="Logo"
            width={150}
            height={50}
            className="object-contain"
          />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="space-x-6">
          <Link href="#approval" className="text-gray-700 hover:text-blue-600">
            Approval
          </Link>
          <Link href="#leave" className="text-gray-700 hover:text-blue-600">
            Leave
          </Link>
          <Link
            href="/expense"
            className="text-white bg-green-600 hover:bg-blue-700 px-4 py-2 rounded-md shadow-md"
          >
            Expense
          </Link>
          <Link href="#lms" className="text-gray-700 hover:text-blue-600">
            L.M.S
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
