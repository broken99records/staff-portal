'use client'

import Image from "next/image";
import LOGO from "@/app/assets/LOGO.png"
//import staff from "@/app/assets/staffff.png"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { account } from "../appwrite";
import Cookies from "js-cookie";
import { isUserLoggedIn } from "../appwriteFunctions";

export default function Login() {

  //router
  const router = useRouter();

  //state variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const [loggedInUser, setLoggedInUser] = useState(null); 

  const handleSubmit  = async () => {
     try {
        const result = await account.createEmailPasswordSession(email, password);
        
        const user = await account.get();
        //const user = await account.getSession('current');
        console.log("User:", user);
        setLoggedInUser(user);
        //setting cookies
        Cookies.set('loggedInUser', JSON.stringify(user), { expires: 1 });
        router.push('/home');
        return result;
      } catch (error) {
        window.alert("Error during login:", error.message);
        console.log("Error during login:", error.message);
        throw new Error("Login failed. Please check your credentials and try again.");
      }   
  }

  useEffect(() => {
    const checkUserLoginStatus = async () => {
      try {
        const user = await isUserLoggedIn();
        console.log("this is the current user:" + user)
        setLoggedInUser(user);        
      } catch (error) {
        console.error("Error checking user login status:", error.message);
      }
    };
  
    checkUserLoginStatus();
  }, []);


  useEffect(() => {
    if (loggedInUser) {
      router.push('/home'); // ✅ Navigate after rendering.
    }
  }, [loggedInUser]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
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

      {/* Main Section */}
      <main className="flex flex-grow bg-gray-100 items-center justify-center ">
        <div className="max-w-4xl mx-auto flex  flex-col md:flex-row items-center shadow-lg rounded-lg overflow-hidden">
          {/* Image Section */}
          <div className="md:w-1/2 bg-gray-100">
            <Image
              src={"/assets/lady-in-brown.png"}
              alt="Staff Member"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Login Form Section */}
          <div className="md:w-1/2 p-6 bg-gray-100">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">
              Login below to access the dashboard
            </h1>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email/Username:
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="mt-1 block text-gray-700 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                  onChange={(e) => setEmail(e.target.value)}                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 block text-gray-700 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => handleSubmit()}
                  className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          
          
          {/* Footer Text */}
          <p className="mt-4 md:mt-0">&copy; Ekondo Staff Portal 2024</p>
        </div>
      </footer>
    </div>
  );
}
