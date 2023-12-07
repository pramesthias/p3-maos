import { Db, ObjectId } from "mongodb";
import { getMongoClientInstance } from "../config";
import { hashText } from "../helpers/bcrypt";

// const DB_NAME = "Maos";

export const getDb = async () => {
  const client = await getMongoClientInstance();
  //   const db = client.db(DB_NAME);
  const db: Db = client.db("Maos");
  return db;
};

export type UserModel = {
  _id: ObjectId;
  name?: string;
  username: string;
  email: string;
  password: string;
};

export type UserNew = Omit<UserModel, "_id">;

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
  const user: UserNew = {
    ...data,
    name: data.username,
    password: hashText(data.password),
  };

  const db = await getDb();
  const newUser = await db.collection("Users").insertOne(user);

  return newUser;
};

// UNIQUE UNAME => CALLED IN CONTROLLER
export const getUserByUname = async (username: string) => {
  const db = await getDb();
  const user = (await db
    .collection("Users")
    .findOne({ username: username })) as UserModel;

  return user;
};

// UNIQUE EMAIL => CALLED IN CONTROLLER
export const getUserByEmail = async (email: string) => {
  const db = await getDb();
  const user = (await db
    .collection("Users")
    .findOne({ email: email })) as UserModel;

  return user;
};
