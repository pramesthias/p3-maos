"use-client"; // =>
// http://localhost:3000/products

import Add from "@/components/Add";
import Card from "@/components/Card";
import Remove from "@/components/Remove";
import { Product } from "@/types"; // import here mas fachri

// mas iam
import type { Metadata } from "next";

// static metadata
export const metadata: Metadata = {
  title: "All Products",
  description: "all books",
};

async function getProducts(): Promise<Product[]> {
  const data = await fetch("localhost:3001/products", {
    cache: "no-store",
  });
  return await data.json();
}

export default async function Products() {
  // mas fachri
  const data = await getProducts();
  console.log(data);
  return (
    <div>
      {/* <Navbar /> */}
      <section className="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md text-center">
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">
              Products
            </h2>
          </div>
          {/* CARD SECTION */}
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-5 sm:gap-4 lg:mt-16">
            {/* card box start */}
            <article className="relative flex flex-col overflow-hidden rounded-lg border">
              {/* IMPORT */}

              {data.map((product) => (
                <Card product={product} key={product.id} />
              ))}

              {/* ADD WISHLIST BUTTON */}
              {/* <Add /> */}
              {/* MAS IAM */}
              {/* <Add products={data} /> */}
              {/* <Remove /> */}
            </article>
            {/*  */}
          </div>
        </div>
      </section>
    </div>
  );
}
