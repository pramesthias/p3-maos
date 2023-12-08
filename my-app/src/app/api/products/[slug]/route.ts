import { getProductsBySlug } from "@/db/models/products";

// DETAIL PRODUCT /products/:slug (SSR)
export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug; // 'a', 'b', or 'c'
  const product = await getProductsBySlug(slug);

  return Response.json(
    {
      statusCode: 200,
      message: `Message from /api/products/${slug}`,
      data: product,
    },
    {
      status: 200,
    }
  );
}
