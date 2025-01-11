"use client";

import { databases, ID } from "./appwrite";

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
      items : JSON.stringify(items),
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
      "676a9d230039cefbd5b3"
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
