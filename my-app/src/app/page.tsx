// import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Add from "@/components/Add";
import Banner from "@/components/Banner";
import Card from "@/components/Card";
import Test from "@/components/test";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <Banner />
      <About /> */}
      <Test />
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
            <article className="relative flex flex-col overflow-hidden rounded-lg border">
              {/* <Card /> */}
              {/* ADD WISHLIST BUTTON */}
              {/* <Add /> */}
            </article>
            {/*  */}
          </div>
          <div className="flex justify-end mt-6">
            <a
              href="/more-products"
              className="text-blue-800 hover:text-blue-600 text-lg font-bold uppercase tracking-wide"
            >
              Lihat Semua
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
