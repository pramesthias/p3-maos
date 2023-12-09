"use client"; // =>
// http://localhost:3000/products

import Add from "@/components/Add";
import Card from "@/components/Card";
import Remove from "@/components/Remove";
import Search from "@/components/Search";
import { Product } from "@/types"; // import here mas fachri
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

// async function getProducts(query: string | null): Promise<Product[]> {
//   const data = await fetch("localhost:3001/products", {
//     cache: "no-store",
//   });
//   return await data.json();
// }

export default function Products() {
  const [data, setData] = useState<Product[]>([]);

  const fetchData = async () => {
    const baseUrl = process.env.THE_URL || "http://localhost:3000";
    const url = `${baseUrl}/api/products`;
    // const url = `${baseUrl}/api/products?page=${page}&pageSize=${pageSize}`; // 2 + ?page=${page}
    const response = await fetch(url, {
      method: "GET",
      // cache: "no-store",
    });

    const products = await response.json();
    setData(products);
  };
  console.log(data, "dari PRODUCTS");

  // 4
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <section className="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md text-center">
            {/* SEARCH COMPONENT */}
            {/* <Search /> */}
            <h2 className="font-serif text-2xl font-bold sm:text-3xl mt-8">
              All Products
            </h2>
          </div>

          {/* CARD SECTION */}
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-5 sm:gap-4 lg:mt-16">
            {/* card box start */}
            {data.map((product, index) => (
              <article
                key={index}
                className="shadow-md relative flex flex-col overflow-hidden rounded-lg border"
              >
                {/* IMPORT */}

                <Card product={product} />

                {/* ADD WISHLIST BUTTON */}
                <div className="flex-grow flex flex-col justify-end">
                  <Add id={product._id} />
                </div>
                {/* MAS IAM */}
                {/* <Remove /> */}
              </article>
            ))}
            {/*  */}
          </div>
        </div>
      </section>
    </div>
  );
}
