// pages/buttonPage.js
import Link from "next/link";
import Image from "next/image";
import LOGO from "@/app/assets/LOGO.png"; // Update the path as per your project structure

export default function entry() {
  return (
    <div className="">
          {/* Header */}
          <header className="bg-gray-100 shadow-md py-4">
            <div className="container mx-auto flex justify-center">
              <Image
                src={LOGO}
                alt="Logo"
                width={150}
                height={50}
                className="object-contain"
              />
            </div>
          </header>
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <Link href="/login">
        <button className="px-6 py-3 text-white bg-green-500 hover:bg-green-600 rounded-lg text-lg font-medium">
          Go to Log In
        </button>
      </Link>
    </div>
    </div>
  );
}
