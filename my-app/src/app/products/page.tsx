"use client"; // =>
// PAGINATION HERE

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
  // 1
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  // const [search, setSearch] = useState(""); //SEARCH

  const fetchData = async () => {
    console.log(page, ">>> INI ");
    //
    const baseUrl = process.env.THE_URL || "http://localhost:3000";
    const url = `${baseUrl}/api/products?page=${page}`;
    const response = await fetch(url, {
      method: "GET",
      cache: "no-store",
    });

    const products = await response.json();
    console.log(products, ">>> PRODUCTS");

    if (products.length === 0) {
      setHasMore(false);
    } else {
      setData([...data, ...products]);
      setPage(page + 1);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <section className="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md text-center">
            {/* SEARCH */}
            {/* <Search /> */}
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">
              All Products
            </h2>
          </div>

          <InfiniteScroll
            dataLength={data.length}
            next={fetchData}
            hasMore={hasMore}
            loader={
              <h2 className="mt-3 mx-auto max-w-md text-center text-blue-800 font-serif font-bold sm:text-2xl">
                Loading...
              </h2>
            }
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b className="mt-8 mx-auto text-center text-blue-800 font-serif font-bold sm:text-xl">
                  - Yay! You have seen it all -
                </b>
              </p>
            }
          >
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
                </article>
              ))}
              {/*  */}
            </div>
          </InfiniteScroll>
        </div>
      </section>
    </div>
  );
}
