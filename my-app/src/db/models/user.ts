import { ObjectId } from "mongodb";
import { getMongoClientInstance } from "../config";

// const DB_NAME = "Maos";

export const getDb = async () => {
  const client = await getMongoClientInstance();
  //   const db = client.db(DB_NAME);
  const db = client.db("Maos");
  return db;
};

export type UserModel = {
  _id: ObjectId;
  name?: string;
  username: string;
  email: string;
  password: string;
};

export const getUsers = async () => {
  const db = await getDb();
  const users = (await db
    .collection("Users")
    .find()
    .project({ password: 0 })
    .toArray()) as UserModel[];

  return users;
};
