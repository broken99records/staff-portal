"use client";

import { databases, ID } from "./appwrite";


export function addPettyCashAdvanceRequestToDb(
  branch,
  department,
  payee_name,
  payee_account,
  items,
  description,
  total_amount
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
      items,
      description,
      total_amount
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


export function getAllRequests() {
    const promise = databases.listDocuments(
      "676a9c3d00142302757e",
      "676a9d230039cefbd5b3"
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