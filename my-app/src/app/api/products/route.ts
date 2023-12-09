import {
  getProducts,
  getProductsPage,
  getProductsPageScroll,
  searchProducts,
} from "@/db/models/products";
import { NextRequest, NextResponse } from "next/server";

// ALL PRODUCTS /products (CSR)
export async function GET(request: NextRequest) {
  // const { searchParams } = new URL(request.url);
  // let search = searchParams.get("search") as string;
  // console.log(search);
  const data = await getProducts();
  // console.log(data);
  return NextResponse.json(data);
}

// INFINITE SCROLL
// export async function GET(request: Request) {
//   const { searchParams } = new URL(request.url);
//   let page = searchParams.get("page") as string;
//   let pageSize = searchParams.get("pageSize") as string;
//   let search = searchParams.get("search") as string;

//   console.log(page, pageSize);

//   if (!page || !pageSize) {
//     return;
//   }

//   const pageNumber = +page;
//   const size = +pageSize;

//   const data = await getProductsPageScroll(pageNumber, size);
//   return NextResponse.json(data);

// }

// const pageNumber = +page || 1;
// const size = +pageSize || 10;

// export default async function handler(req: Request, res: Response) {
//   if (req.method === "GET") {
//     const { name } = req.query as { name: string };

//     const products = await searchProducts(name); // Gunakan fungsi pencarian produk dari model
//   }
// }

// Property 'query' does not exist on type 'Request'.
