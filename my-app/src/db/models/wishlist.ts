import { ObjectId } from "mongodb";
import { getMongoClientInstance } from "../config";

import { ProductModel } from "./products";
import { UserModel } from "./user";

export const getDb = async () => {
  const client = await getMongoClientInstance();
  const db = client.db("Maos");
  return db;
};

export interface WishModel {
  _id: ObjectId;
  userId: ObjectId;
  productId: ObjectId;
  createdAt: string;
  updatedAt: string;
  user: UserModel;
  product: ProductModel;
}

export type WishNew = Omit<WishModel, "_id" | "user" | "product">;
export type WishOld = Omit<WishModel, "user" | "product">;

// ADD WISH OK
export const addWishlist = async (userId: string, productId: string) => {
  console.log(userId, productId, ">>> DARI mODEL");
  const date = new Date().toDateString();

  const wishlist: WishNew = {
    userId: new ObjectId(userId),
    productId: new ObjectId(productId),
    createdAt: date,
    updatedAt: date,
  };

  const db = await getDb();

  const wish = (await db.collection("Wishlists").findOne({
    userId: new ObjectId(userId),
    productId: new ObjectId(productId),
  })) as WishOld;

  if (wish) {
    return "You Already Added this Product";
  }

  const newWish = await db.collection("Wishlists").insertOne(wishlist);
  return newWish;
};

// DEL WISHLISTS OK
export const deleteWishlist = async (id: string) => {
  const db = await getDb();
  await db.collection("Wishlists").deleteOne({ productId: new ObjectId(id) });
};

// List Wishlists (CSR) => OK
export const getWish = async (userId: string) => {
  const db = await getDb();
  const wishlists = (await db
    .collection("Wishlists")
    .aggregate([
      { $match: { userId: new ObjectId(userId) } },
      {
        $lookup: {
          from: "Users",
          localField: "userId",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        $lookup: {
          from: "Products",
          localField: "productId",
          foreignField: "_id",
          as: "product",
        },
      },
    ])
    .toArray()) as WishModel[];

  return wishlists;
};
