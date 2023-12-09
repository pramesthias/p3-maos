import About from "@/components/About";
import Add from "@/components/Add";
import Banner from "@/components/Banner";
import Card from "@/components/Card";
import Featured from "@/components/Featured";
import { Product } from "@/types";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Maos Homepage",
  description: "Banner Promotion, About Us, and Featured Products",
};

export default async function Home() {
  return (
    <div>
      <Banner />
      <About />
      <Featured />
    </div>
  );
}
