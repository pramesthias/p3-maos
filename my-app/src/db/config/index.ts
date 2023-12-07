import "dotenv/config";
import { MongoClient } from "mongodb";

const connectionString = process.env.MONGO_URI;

if (!connectionString) {
  throw new Error("Connection String does not exist");
}

let client: MongoClient; // => class bisa menjadi type

export const getMongoClientInstance = async () => {
  if (!client) {
    client = new MongoClient(connectionString);
    await client.connect();
  }
  return client;
};
