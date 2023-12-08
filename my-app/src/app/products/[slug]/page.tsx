// mas fachri
// => http://localhost:3000/products/[slug]

import Add from "@/components/Add";
import { Product } from "@/types";
import type { Metadata, ResolvingMetadata } from "next";
import { cookies } from "next/headers";

async function getProductBySlug(slug: string): Promise<Product> {
  // const response = await fetch("http://localhost:3000/api/products/" + slug);
  // const data = await response.json();
  // return data;
  // throw new Error("err"); // error handling mas fachri

  let url = "http://localhost:3000/api/products/" + slug;
  const data = await fetch(url, {
    cache: "no-store",
    headers: {
      Cookie: cookies().toString(),
    },
  });

  return await data.json();
}

// type Props = {
//   params: {
//     slug: string;
//   };
// };

// mas iam DYNAMIC METADATA:

// type PropsMeta = {
//   params: { slug: string };
//   searchParams: { [key: string]: string | string[] | undefined };
// };

// export async function generateMetadata(
//   { params, searchParams }: PropsMeta,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
// read route params
// const slug = params.slug;

// fetch data
// const product = await getProductBySlug(slug);

// optionally access and extend (rather than replace) parent metadata
// const previousImages = (await parent).openGraph?.images || [];

//   return {
//     title: data.name,
//     openGraph: {
//       images: ["/some-specific-page-image.jpg", ...previousImages],
//     },
//   };
// }
// ========== end here METADATA

// export default async function ProductDetail({ params }: Props) {
export default async function ProductDetail({
  // => mas iam
  params,
}: {
  params: {
    slug: string;
  };
}) {
  // mas fachri
  const product = await getProductBySlug(params.slug);
  let data;
  if ("data" in product) {
    data = product.data as Product;
  }

  // console.log(product);
  //   JSON.stringify(product) => mas iam

  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
        {/* <!-- Preview Images Div For larger Screen--> */}

        <div className="w-full sm:w-96 md:w-8/12 lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
          <div className="w-full lg:w-8/12 bg-grey-500 flex justify-center items-center">
            <img src={data?.images[1]} alt={data?.name} />
          </div>
          <div className="w-full lg:w-4/12 grid lg:grid-cols-1 sm:grid-cols-4 grid-cols-2 gap-6">
            <div className="bg-red-500 flex justify-center items-center">
              <img src={data?.images[1]} alt={data?.name} />
            </div>
            <div className="bg-red-500 flex justify-center items-center">
              <img src={data?.images[1]} alt={data?.name} />
            </div>
          </div>
        </div>

        {/* <!-- Description Div --> */}

        <div className="w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
          <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 dark:text-white mt-4">
            {data?.name}
          </h2>

          <p className="font-normal text-base leading-6 text-gray-600  mt-7">
            {data?.excerpt}
          </p>
          <p className="font-normal text-base leading-6 text-gray-600  mt-7">
            {data?.description}
          </p>
          <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 text-blue-800">
            {data?.price.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
          </p>

          {/* <del className="font-semibold text-md lg:leading-6 leading-5 mt-6 text-gray-600">
            {(
              data?.price -
              (data?.price * Math.floor(Math.random() * 51)) / 100
            ).toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
          </del> */}

          <div className="lg:mt-11 mt-10">
            {/* <div className="flex flex-row justify-between">
              <p className="font-medium text-base leading-4 text-gray-600 ">
                Select quantity
              </p>
            </div> */}
            <hr className="bg-gray-200 w-full my-2" />
            {/* <div className="flex flex-row justify-between items-center mt-4">
              <p className="font-medium text-base leading-4 text-gray-600 ">
                Dimensions
              </p>
            </div> */}
            <hr className="bg-gray-200 w-full mt-4" />
          </div>

          {/* <button
          className="focus:outline-none focus:ring-2 hover:bg-blue-600 focus:ring-offset-2 focus:ring-gray-800 
        font-medium text-base leading-4 text-white bg-blue-800 w-full py-5 lg:mt-12 mt-6 
        dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
        >
          Add to Wishlist
        </button> */}
          <div className="w-full py-5 lg:mt-12 mt-6 ">
            {/* ADD BUTTON */}
            {/* <Add /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
