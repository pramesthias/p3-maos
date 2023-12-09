import {
  getProducts,
  getProductsPage,
  getProductsPageScroll,
  searchProducts,
} from "@/db/models/products";
import { NextRequest, NextResponse } from "next/server";

// ALL PRODUCTS /products (CSR)
// export async function GET(request: NextRequest) {
// const { searchParams } = new URL(request.url);
// let search = searchParams.get("search") as string;
// console.log(search);
// const data = await getProducts();
// console.log(data);
// return NextResponse.json(data);
// }

// INFINITE SCROLL
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  let page = searchParams.get("page") as string;
  // let pageSize = searchParams.get("pageSize") as string;
  // let search = searchParams.get("search") as string;

  console.log(page, ">>>PAGE");

  // if (!page) {
  //   return;
  // }

  const pageNumber = +page;
  // const size = +pageSize;

  const data = await getProductsPageScroll(pageNumber);
  return NextResponse.json(data);
}
