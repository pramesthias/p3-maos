import { addWishlist, deleteWishlist, getWish } from "@/db/models/wishlist";
import { NextRequest, NextResponse } from "next/server";
import { string, z } from "zod";

// GET ALL BY USER ID
export async function GET(request: NextRequest) {
  const data = await getWish();
  return NextResponse.json(data);
}

// ADD WISH
const Wish = z.object({
  userId: z.string(),
  productId: z.string(),
});

export async function POST(request: NextRequest) {
  try {
    const userId = request.headers.get("x-user-id") as string;
    const productId: { productId: string } = await request.json();
    const prodId = productId?.productId as string;
    // console.log(userId);
    // console.log(productId.productId);

    // PIKIR NANTI
    // const validation = Wish.safeParse({ userId, prodId });
    // if (!validation.success) {
    //   throw validation.error;
    // }

    const wishlists = await addWishlist(userId, prodId);

    return NextResponse.json(
      {
        message: "Added to the Wishlist",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errPath = error.issues[0].path[0];
      const errMessage = error.issues[0].message;

      return NextResponse.json(
        {
          message: `${errPath} ${errMessage.toLocaleLowerCase()}`,
        },
        {
          status: 400,
        }
      );
    }

    return NextResponse.json(
      {
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}

// DELETE WISH
export async function DELETE(request: NextRequest) {
  try {
    const userId = request.headers.get("x-user-id") as string;
    const productId: { productId: string } = await request.json();
    const prodId = productId?.productId as string;

    // PIKIR NANTI
    // const validation = Wish.safeParse({ userId, prodId });
    // if (!validation.success) {
    //   throw validation.error;
    // }

    //   console.log(request);
    //   const id = params.id;
    //   const wishlists = await deleteWishlist(id);

    const wishlists = await deleteWishlist(prodId);

    return NextResponse.json(
      {
        message: "Deleted from the Wishlist",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errPath = error.issues[0].path[0];
      const errMessage = error.issues[0].message;

      return NextResponse.json(
        {
          message: `${errPath} ${errMessage.toLocaleLowerCase()}`,
        },
        {
          status: 400,
        }
      );
    }

    return NextResponse.json(
      {
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}
