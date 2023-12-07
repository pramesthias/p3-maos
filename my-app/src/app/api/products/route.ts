import { getProducts } from "@/db/models/products";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request) {
  const products = await getProducts();
  return Response.json(
    {
      statusCode: 200,
      message: "Message from /api/products",
      data: products,
    },
    {
      status: 200,
    }
  );
}

// export async function GET(request: NextRequest) {
//   const data = await getProducts();
//   console.log(request.headers.get("x-user-email"), "ini");
//   return NextResponse.json(data);
// }
