import { ObjectId } from "mongodb";
import { getMongoClientInstance } from "../config";

export const getDb = async () => {
  const client = await getMongoClientInstance();
  const db = client.db("Maos");
  return db;
};

export interface ProductModel {
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
}

// List Product (CSR)
export const getProducts = async () => {
  const db = await getDb();
  const products = (await db
    .collection("Products")
    .find()
    .toArray()) as ProductModel[];

  return products;
};

// PAGINATION ALL

export const getProductsPage = async () => {
  const db = await getDb();
  const products = (await db
    .collection("Products")
    .aggregate([{ $skip: 0 }, { $limit: 21 }]) //all
    .toArray()) as ProductModel[];

  return products;
};

// USED
export const getProductsPageScroll = async (
  page: number,
  name: string
): Promise<ProductModel[]> => {
  const skipValue = (page - 1) * 10;

  console.log(page, ">>> DARI MODEL");
  const db = await getDb();
  const products = (await db
    .collection("Products")
    .aggregate([
      { $match: { name: { $regex: name, $options: "i" } } },
      { $skip: skipValue },
      { $limit: 10 },
    ])
    .toArray()) as ProductModel[];

  return products;
};

// Detail product: /products/:slug (SSR)
export const getProductsBySlug = async (slug: string) => {
  const db = await getDb();
  const product = (await db
    .collection("Products")
    .findOne({ slug })) as ProductModel;

  return product;
};

// Search (CSR) : SEARCH BY NAME => NOT YET
export const searchProducts = async (name: string) => {
  const db = await getDb();
  const products = (await db
    .collection("Products")
    .find({ name: { $regex: name, $options: "i" } })
    .toArray()) as ProductModel[];

  return products;
};
