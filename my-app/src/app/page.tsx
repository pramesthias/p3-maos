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
  let url = "http://localhost:3000/api/products";
  const data = await fetch(url, {
    cache: "no-store",
    headers: {
      Cookie: cookies().toString(),
    },
  });

  return await data.json();
}

export default async function Home() {
  const data = await getProducts(); //SERVER SIDE (?)
  console.log(data);

  return (
    <div>
      {/* <Navbar /> */}
      {/* <Banner />
      <About /> */}
      <Test />
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
            {data?.map((p) => (
              <article
                key={p._id}
                className="relative flex flex-col overflow-hidden rounded-lg border"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                    src={p.thumbnail}
                    alt={p.name}
                  />
                </div>
                <div className="absolute top-0 m-2">
                  <Link
                    href={`/products/${p.slug}`} // mas fachri
                    className="rounded-md  bg-blue-800 p-1 text-[10px] font-bold uppercase tracking-wide text-white lg:py-2 lg:px-2"
                  >
                    detail
                  </Link>
                </div>
                <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                  <div className="mb-2 flex">
                    <p className="mr-3 text-sm font-semibold">$79.00</p>
                    <del className="text-xs text-gray-400"> $99.00 </del>
                  </div>
                  <h3 className="mb-2 text-sm text-gray-400">Fresh Apples</h3>
                </div>
                {/* <Card /> */}
                {/* ADD WISHLIST BUTTON */}
                {/* <Add /> */}
              </article>
            ))}
            {/*  */}
          </div>
          <div className="flex justify-end mt-6">
            <a
              href="/more-products"
              className="text-blue-800 hover:text-blue-600 text-lg font-bold uppercase tracking-wide"
            >
              Lihat Semua
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
