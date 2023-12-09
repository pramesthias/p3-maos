import About from "@/components/About";
import Add from "@/components/Add";
import Banner from "@/components/Banner";
import Card from "@/components/Card";
import Featured from "@/components/Featured";
import { Product } from "@/types";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Maos Homepage",
  description: "Banner Promotion, About Us, and Featured Products",
};

// async function getProducts(): Promise<Product[]> {
//   const baseUrl = process.env.THE_URL || "http://localhost:3000";
//   const url = `${baseUrl}/api/products`;
//   const data = await fetch(url, {
//     cache: "no-store",
//     headers: {
//       Cookie: cookies().toString(),
//     },
//   });

//   return await data.json();
// }

export default async function Home() {
  // const data = await getProducts(); //SERVER SIDE (?)
  // const fiveData = data.slice(0, 5);

  return (
    <div>
      <Banner />
      <About />

      <Featured />
    </div>
  );
}
