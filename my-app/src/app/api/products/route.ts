import { getProducts } from "@/db/models/products";

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
