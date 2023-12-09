// import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Add from "@/components/Add";
import Banner from "@/components/Banner";
import Card from "@/components/Card";
import Test from "@/components/test";
import Image from "next/image";
import { Product } from "@/types";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";

// SERVER SIDE RENDERING (?)
export const metadata: Metadata = {
  title: "Maos Homepage",
  description: "Banner Promotion, About Us, and Featured Products",
};

async function getProducts(): Promise<Product[]> {
  const baseUrl = process.env.THE_URL || "http://localhost:3000";
  const url = `${baseUrl}/api/products`;
  const data = await fetch(url, {
    // cache: "no-store",
    headers: {
      Cookie: cookies().toString(),
    },
  });

  return await data.json();
}

export default async function Home() {
  const data = await getProducts(); //SERVER SIDE (?)
  const fiveData = data.slice(0, 5);

  // console.log(fiveData);

  return (
    <div>
      <Banner />
      <About />
      {/* <Test /> */}
      <section className="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md text-center">
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">
              Featured Product
            </h2>
          </div>
          {/* CARD SECTION */}
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-5 sm:gap-4 lg:mt-16">
            {/* card box start */}
            {fiveData?.map((p) => (
              <article
                key={p._id}
                className="relative flex flex-col overflow-hidden rounded-lg border"
              >
                <Card product={p} />
                {/* ADD WISHLIST BUTTON */}
                <Add id={p._id} />
              </article>
            ))}
            {/*  */}
          </div>
          <div className="flex justify-end mt-6">
            <a
              href="/more-products"
              className="text-blue-800 hover:text-blue-600 text-lg font-bold uppercase tracking-wide"
            >
              See All Products
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
