import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { readPayload, readPayloadJose } from "./lib/jwt";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  //   return NextResponse.redirect(new URL("/home", request.url));
  console.log(request.url, ">>> from MIDDLEWARE");

  // => /wishlist ?
  if (request.url.includes("api/products")) {
    const authorization = cookies().get("Authorization");
    console.log(authorization, ">>> Authorization");

    if (!authorization) {
      return NextResponse.json(
        {
          message: "Authentication failed",
        },
        {
          status: 401,
        }
      );
    }

    const accessToken = authorization.value.split(" ")[1];
    const decodedUser = await readPayloadJose<{ _id: string; email: string }>(
      accessToken
    );

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-user-id", decodedUser._id);
    requestHeaders.set("x-user-email", decodedUser.email);

    const response = NextResponse.next({
      request: { headers: requestHeaders },
    });

    console.log(decodedUser, ">>> decoded USER");
    return response;
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/api/:path*"],
};
