import Image from "next/image";
import Add from "./Add";
import Banner from "./Banner";
import About from "./About";
import Link from "next/link";

export default function Test() {
  return (
    <div>
      {/* <Navbar /> */}
      <Banner />
      <About />
      {/* <Test /> */}
      <section className="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md text-center">
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">
              Featured Product
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-5 sm:gap-4 lg:mt-16">
            <article className="relative flex flex-col overflow-hidden rounded-lg border">
              <div>
                <div className="aspect-square overflow-hidden">
                  <img
                    className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                    src="/images/3.png"
                    alt=""
                  />
                </div>
                <div className="absolute top-0 m-2">
                  <a className="rounded-md  bg-blue-800 p-1 text-[10px] font-bold uppercase tracking-wide text-white lg:py-2 lg:px-2">
                    detail
                  </a>
                </div>
                <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                  <div className="mb-2 flex">
                    <p className="mr-3 text-sm font-semibold">$79.00</p>
                    <del className="text-xs text-gray-400"> $99.00 </del>
                  </div>
                  <h3 className="mb-2 text-sm text-gray-400">Fresh Apples</h3>
                </div>
                {/*  */}
              </div>
            </article>

            <article className="relative flex flex-col overflow-hidden rounded-lg border">
              <div>
                <div className="aspect-square overflow-hidden">
                  <img
                    className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                    src="/images/3.png"
                    alt=""
                  />
                </div>
                <div className="absolute top-0 m-2">
                  <a className="rounded-md  bg-blue-800 p-1 text-[10px] font-bold uppercase tracking-wide text-white lg:py-2 lg:px-2">
                    detail
                  </a>
                </div>
                <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                  <div className="mb-2 flex">
                    <p className="mr-3 text-sm font-semibold">$79.00</p>
                    <del className="text-xs text-gray-400"> $99.00 </del>
                  </div>
                  <h3 className="mb-2 text-sm text-gray-400">Fresh Apples</h3>
                </div>
                {/*  */}
              </div>
            </article>

            <article className="relative flex flex-col overflow-hidden rounded-lg border">
              <div>
                <div className="aspect-square overflow-hidden">
                  <img
                    className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                    src="/images/3.png"
                    alt=""
                  />
                </div>
                <div className="absolute top-0 m-2">
                  <a className="rounded-md  bg-blue-800 p-1 text-[10px] font-bold uppercase tracking-wide text-white lg:py-2 lg:px-2">
                    detail
                  </a>
                </div>
                <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                  <div className="mb-2 flex">
                    <p className="mr-3 text-sm font-semibold">$79.00</p>
                    <del className="text-xs text-gray-400"> $99.00 </del>
                  </div>
                  <h3 className="mb-2 text-sm text-gray-400">Fresh Apples</h3>
                </div>
                {/*  */}
              </div>
            </article>

            {/*  */}
          </div>
          <div className="flex justify-end mt-6">
            <a
              href="/more-products"
              className="text-blue-800 hover:text-blue-600 text-lg font-bold uppercase tracking-wide"
            >
              See More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
