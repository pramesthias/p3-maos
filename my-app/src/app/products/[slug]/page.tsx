"use server";
// => http://localhost:3000/products/[slug]

import Add from "@/components/Add";
import { Product } from "@/types";
import { cookies } from "next/headers";

async function getProductBySlug(slug: string): Promise<Product> {
  let url = process.env.NEXT_PUBLIC_THE_URL + "/api/products/" + slug;
  const data = await fetch(url, {
    cache: "no-store",
    headers: {
      Cookie: cookies().toString(),
    },
  });

  return await data.json();
}

// export default async function ProductDetail({ params }: Props) {
export default async function ProductDetail({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const product = await getProductBySlug(params.slug);
  let data;
  if ("data" in product) {
    data = product.data as Product;
  }

  console.log(data);

  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
        {/* <!-- Preview Images Div For larger Screen--> */}

        <div className="w-full sm:w-96 md:w-8/12 lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
          <div className="w-full lg:w-8/12 bg-grey-500 flex justify-center items-center border border-gray-500 rounded-md p-2">
            <img src={data?.images[0]} alt={data?.name} />
          </div>
          <div className="w-full lg:w-4/12 grid lg:grid-cols-1 sm:grid-cols-4 grid-cols-2 gap-6">
            <div className="bg-white-500 flex justify-center items-center border border-gray-500 rounded-md p-2">
              <img src={data?.images[1]} alt={data?.name} />
            </div>
            <div className="bg-white-500 flex justify-center items-center border border-gray-500 rounded-md p-2">
              <img src={data?.images[2]} alt={data?.name} />
            </div>
          </div>
        </div>

        {/* <!-- Description Div --> */}

        <div className="w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
          <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 dark:text-white mb-5 mt-4">
            {data?.name}
          </h2>

          <hr className="bg-gray-200 w-full my-2" />

          <del className="font-semibold text-md mt-10 text-gray-600">
            {data?.price.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
          </del>

          {data && data.price ? (
            <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 text-blue-800">
              {(
                data?.price -
                (data?.price * Math.floor(Math.random() * 51)) / 100
              ).toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </p>
          ) : (
            <p>No Discount available</p>
          )}

          <hr className="bg-gray-200 w-full my-2" />

          <div className="font-normal text-base leading-6 text-gray-600 mt-7">
            <p className="font-semibold text-lg text-black">Deskripsi Buku</p>
            {data?.excerpt}
          </div>
          <p className="font-normal text-base leading-6 text-gray-600 mt-2 mb-7">
            {data?.description}
          </p>

          <div className="lg:mt-11 mt-10">
            <hr className="bg-gray-200 w-full mt-4" />
          </div>
          <div className="w-full py-5 lg:mt-12 mt-6 ">
            {/* ADD BUTTON */}
            <Add id={data?._id} data-ssr-flag />
          </div>
        </div>
      </div>
    </div>
  );
}
