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

export type WishNew = Omit<WishModel, "_id">;

export const addWishlist = async (data: WishNew) => {
  const wishlist: WishNew = {
    ...data,
    userId: data, // dari yang login
    password: hashText(data.password),
  };

  const db = await getDb();
  const newWish = await db.collection("Wishlists").insertOne(wishlist);

  return newWish;
};
