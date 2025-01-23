"use client";

import { databases, Query, ID, account } from "./appwrite";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";


export function addRequestToDb(
  branch = null,
  department = null,
  payee_name = null,
  payee_account = null,
  items = null,
  description = null,
  total_amount = null,
  invoice_amount = null,
  cash_advance = null,
  less_what = null,
  refund_reimbursement = null
) {
  const promise = databases.createDocument(
    "676a9c3d00142302757e",
    "676a9d230039cefbd5b3",
    ID.unique(),
    {
      branch,
      department,
      payee_name,
      payee_account,
      items: JSON.stringify(items),
      description,
      total_amount,
      invoice_amount,
      cash_advance,
      less_what,
      refund_reimbursement,
    }
  );

  promise.then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
}

export async function getAllRequests() {
  try {
    const response = await databases.listDocuments(
      "676a9c3d00142302757e",
      "676a9d230039cefbd5b3",
      
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function addItemsToDb(items) {
  const response = await databases.createDocument(
    "676a9c3d00142302757e",
    "676a9d230039cefbd5b3",
    ID.unique(),
    {
      items: JSON.stringify(items),
    }
  );

  console.log("Document created with array:", response);
}

export async function logIn(email, password) {
  const router = useRouter();

  try {
    const result = await account.createEmailPasswordSession(email, password);
    router.push("/home");
    return result;
  } catch (error) {
    console.error("Error during login:", error.message);
    throw new Error(
      "Login failed. Please check your credentials and try again."
    );
  }
}

export async function logout() {
  try {
    const result = await account.deleteSession("current");
    console.log("Session successfully deleted:", result);
    Cookies.remove('loggedInUser');
    return result;
  } catch (error) {
    console.error("Error during logout:", error.message);
    Cookies.remove('loggedInUser');
    throw new Error("Logout failed. Please try again.");
  }
 
}

export async function isUserLoggedIn(){
  try {
    const result = await account.get();
    return result
  } catch (error) {
    
  }
}


export async function getRole() {
  try {
    const result = await account.getPrefs();
    console.log("User role:", result.role); // Ensure the role is accessed correctly from result.
    return result.role;
  } catch (error) {
    console.error("Error getting user role:", error.message);
    throw new Error("Failed to get user role. Please try again.");
  }
}

export async function getRequestsByRole() {
  try {
    const role = await getRole(); // Retrieve the role dynamically.
    const response = await databases.listDocuments(
      "676a9c3d00142302757e", // Replace with your database ID.
      "676a9d230039cefbd5b3", // Replace with your collection ID.
      [Query.equal("approved_by", role)] // Ensure the query matches your schema.
    );
    console.log("Requests by role:", response);
    return response;
  } catch (error) {
    console.error("Error getting requests by role:", error.message);
    throw new Error("Failed to get requests. Please try again.");
  }
}
