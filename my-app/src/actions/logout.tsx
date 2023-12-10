"use server";

import { cookies } from "next/headers"; // karna di server
import { redirect } from "next/navigation";

export default async () => {
  cookies().get("Authorization") && cookies().delete("Authorization");

  redirect("/login");
};
