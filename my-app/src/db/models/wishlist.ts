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

export const addWishlist = async (userId: string, productId: string) => {
  console.log(userId, productId, ">>> DARI mODEL");
  const date = new Date().toDateString();

  const wishlist: WishNew = {
    userId: new ObjectId(userId), // dari yang login (?)
    productId: new ObjectId(productId),
    createdAt: date,
    updatedAt: date,
  };

  // return wishlist;
  const db = await getDb();
  const newWish = await db.collection("Wishlists").insertOne(wishlist);
  return newWish;
};

// DEL WISHLISTS
export const deleteWishlist = async (id: string) => {
  const db = await getDb();
  const delWish = await db
    .collection("Wishlists")
    .deleteOne({ productId: new ObjectId(id) });

  return delWish;
};

// List Wishlists (CSR) => find/find all(?)
export const getWish = async () => {
  // USRiD

  const db = await getDb();
  // const wishlists = (await db
  //   .collection("Wishlists")
  //   .aggregate([{ $match: { userId: new ObjectId(id) } }])
  //   .toArray()) as WishModel[];

  const wishlists = (await db
    .collection("Wishlists")
    .find()
    .toArray()) as WishModel[];

  return wishlists;
};
