import { compareText } from "@/db/helpers/bcrypt";
import { createUser, getUserByEmail, getUserByUname } from "@/db/models/user";
import { createToken } from "@/lib/jwt";
import { NextResponse } from "next/server";
import { z } from "zod";

//  CONTROLLER

const User = z.object({
  email: z.string().email(),
  password: z.string().min(5),
});

export async function POST(request: Request) {
  try {
    const body: { email: string; password: string } = await request.json();

    const validation = User.safeParse(body);

    if (!validation.success) {
      throw validation.error;
    }

    const userIn = await getUserByEmail(body.email);

    if (!userIn) {
      return NextResponse.json(
        {
          message: "Invalid email/password",
        },
        {
          status: 401,
        }
      );
    }

    const isValid = compareText(body.password, userIn.password);
    if (!isValid) {
      return NextResponse.json(
        {
          message: "Invalid email/password",
        },
        {
          status: 401,
        }
      );
    }

    const accessToken = createToken({
      _id: userIn._id,
      email: userIn.email,
    });

    const response = NextResponse.json(
      {
        message: "You Succesfully Login",
        data: {
          accessToken,
        },
      },
      {
        status: 201,
      }
    );

    response.cookies.set("Authorization", `Bearer ${accessToken}`);

    return response;
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
