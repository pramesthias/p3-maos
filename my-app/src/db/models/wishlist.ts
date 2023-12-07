import { ObjectId } from "mongodb";
import { getMongoClientInstance } from "../config";

export const getDb = async () => {
  const client = await getMongoClientInstance();
  const db = client.db("Maos");
  return db;
};

export type WishModel = {
  _id: ObjectId;
  userId: ObjectId;
  productId: ObjectId;
  createdAt: string;
  updatedAt: string;
};
