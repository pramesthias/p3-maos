"use client";
// http://localhost:3000/wishlist

import Card from "@/components/Card";
import Remove from "@/components/Remove";
import { Wishlist } from "@/types";
import { useRouter } from "next/navigation";
import { MouseEvent, useEffect, useState } from "react";

export default function Wishlist() {
  const [data, setData] = useState<Wishlist[]>([]);

  const fetchData = async () => {
    const baseUrl = process.env.THE_URL || "http://localhost:3000";
    const url = `${baseUrl}/api/wishlist`;
    const response = await fetch(url, {
      method: "GET",
      cache: "no-store",
    });

    const products = await response.json();
    setData(products);
    console.log(data, ">>> Dari wishlists");
  };

  useEffect(() => {
    fetchData();
  }, []);

  const successDelete = () => {
    fetchData();
  };

  return (
    <div>
      <section className="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md text-center">
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">
              Wishlist
            </h2>
          </div>
          {/* CARD SECTION */}
          {/* card box start */}
          {data && data.length > 0 ? (
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-5 sm:gap-4 lg:mt-16">
              {data?.map((w, index) => (
                <div key={index}>
                  {w.product.map((p, index) => (
                    <article
                      key={index}
                      className="relative flex flex-col overflow-hidden rounded-lg border"
                    >
                      <Card product={p} />

                      <Remove id={p._id} onDelete={successDelete} />
                    </article>
                  ))}
                </div>
              ))}
            </div>
          ) : (
            <p style={{ textAlign: "center" }} className="mt-10">
              <b className="text-blue-800 font-serif font-bold sm:text-xl">
                - You do not have any Wishlists -
              </b>
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
