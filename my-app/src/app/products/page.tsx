"use client"; // =>
// http://localhost:3000/products

import Add from "@/components/Add";
import Card from "@/components/Card";
import Remove from "@/components/Remove";
import { Product } from "@/types"; // import here mas fachri
import { redirect } from "next/navigation";

import { useEffect, useState } from "react";

// async function getProducts(query: string | null): Promise<Product[]> {
//   const data = await fetch("localhost:3001/products", {
//     cache: "no-store",
//   });
//   return await data.json();
// }

export default function Products() {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      let url = "http://localhost:3000/api/products";
      const response = await fetch(url, {
        // cache: "no-store",
        method: "GET",
      });

      // if (!response.ok) {
      //   return redirect("/products?error=" + result.message);
      // }

      const products = await response.json();
      console.log(products, "dari PRODUCTS");
      setData(products);
      // console.log(data, "dari PRODUCTS");
    };
    fetchData();
  }, []);

  // mas fachri
  // const data = await getProducts(null); //SERVER SIDE (?)
  // console.log(data);
  return (
    <div>
      {/* <Navbar /> */}
      <section className="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md text-center">
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">
              All Products
            </h2>
          </div>
          {/* CARD SECTION */}
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-5 sm:gap-4 lg:mt-16">
            {/* card box start */}
            {data.map((product) => (
              <article
                key={product._id}
                className="relative flex flex-col overflow-hidden rounded-lg border"
              >
                {/* IMPORT */}

                <Card product={product} />

                {/* ADD WISHLIST BUTTON */}
                {/* <Add /> */}
                {/* MAS IAM */}
                {/* <Add products={data} /> */}
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
