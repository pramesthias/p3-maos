"use client";
// http://localhost:3000/wishlist

import Card from "@/components/Card";
import Remove from "@/components/Remove";
import { Wishlist } from "@/types";
import { useRouter } from "next/navigation";
import { MouseEvent, useEffect, useState } from "react";

// harusnya di PostCard! mas iam
// export default function Wishlist({ product }: { product: Product }) {
export default function Wishlist() {
  // React.MouseEvent<HTMLButtonElement>
  // mas iam
  // const navigation = useRouter();
  // const handleDelete = async (
  //   _event: MouseEvent<HTMLButtonElement>, // => _ ada tp tdk digunakan
  //   id: string
  // ) => {
  //   console.log(id);

  //   const response = await fetch(`http/${id}`, {
  //     method: "DELETE",
  //   });

  //   const responseJson = await response.json();

  //   navigation.refresh();
  // };

  const [data, setData] = useState<Wishlist[]>([]);

  useEffect(() => {
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

    fetchData();
  }, []);

  return (
    <div>
      {/* <Navbar /> */}
      <section className="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md text-center">
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">
              Wishlist
            </h2>
          </div>
          {/* CARD SECTION */}
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-5 sm:gap-4 lg:mt-16">
            {/* card box start */}
            {data ? (
              data?.map((w, index) => (
                <div key={index}>
                  {w.product.map((p) => (
                    <article className="relative flex flex-col overflow-hidden rounded-lg border">
                      {/* IMPORT */}
                      <Card product={p} />
                      {/* ADD WISHLIST / delete BUTTON */}
                      {/* <Remove /> */}

                      {/* mas iam */}
                      <button
                        // onClick={(event) => handleDelete(event, product.id)}
                        className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-white"
                      >
                        <div className="flex w-full items-center justify-center bg-red-700 text-xs uppercase transition group-hover:bg-red-500 group-hover:text-white">
                          Remove
                        </div>
                      </button>
                      {/*  */}
                    </article>
                  ))}
                </div>
              ))
            ) : (
              <p style={{ textAlign: "center" }}>
                <b className="mt-8 mx-auto text-center text-blue-800 font-serif font-bold sm:text-xl">
                  - You do not have any Wishlists -
                </b>
              </p>
            )}
            {/*  */}
          </div>
        </div>
      </section>
    </div>
  );
}
