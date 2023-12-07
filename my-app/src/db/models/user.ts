import { ObjectId } from "mongodb";
import { getMongoClientInstance } from "../config";
import { hashText } from "../helpers/bcrypt";

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

export type UserNew = {
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

export const createUser = async (data: UserNew) => {
  const db = await getDb();
  const user: UserNew = {
    ...data,
    name: data.username,
    password: hashText(data.password),
  };

  const newUser = await db.collection("Users").insertOne(user);

  return newUser;
};
