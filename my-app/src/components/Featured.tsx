"use client";

import Link from "next/link";
import Add from "./Add";
import Card from "./Card";
import { useEffect, useState } from "react";
import { Product } from "@/types";

export default function Featured() {
  const [data, setData] = useState<Product[]>([]);

  const fetchData = async () => {
    const baseUrl = process.env.THE_URL || "http://localhost:3000";
    const url = `${baseUrl}/api/products?page=1`; // 2 + ?page=${page}
    const response = await fetch(url, {
      method: "GET",
      cache: "no-store",
    });

    const products = await response.json();
    // setData([...data, ...products]);
    setData(products);
    console.log(products, ">>> FEATURED PRODUCTS");
    console.log(data, ">>> Data");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
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
              <Card product={p} />
              {/* ADD WISHLIST BUTTON */}
              <Add id={p._id} />
            </article>
          ))}
          {/*  */}
        </div>
        <div className="flex justify-end mt-6">
          <Link
            href="/products"
            className="text-blue-800 hover:text-blue-600 text-lg font-bold uppercase tracking-wide"
          >
            See All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
