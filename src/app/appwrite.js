import { Client, Databases, Query, Account } from "appwrite";

export const client = new Client();

client
  .setProject("676a98c7002a526dc7d7")
  .setEndpoint("https://cloud.appwrite.io/v1");




export const databases = new Databases(client);
export const account = new Account(client);
export { ID } from 'appwrite';
export {Query}
