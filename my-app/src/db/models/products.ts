import { ObjectId } from "mongodb";
import { getMongoClientInstance } from "../config";

// const DB_NAME = "Maos";

export const getDb = async () => {
  const client = await getMongoClientInstance();
  //   const db = client.db(DB_NAME);
  const db = client.db("Maos");
  return db;
};

export type ProductModel = {
  _id: ObjectId;
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
};

export const getProducts = async () => {
  const db = await getDb();
  const products = (await db
    .collection("Products")
    .find()
    .toArray()) as ProductModel[];

  return products;
};

export const getProductsBySlug = async (slug: string) => {
  const db = await getDb();
  const product = (await db
    .collection("Products")
    .findOne({ slug })) as ProductModel;

  return product;
};
