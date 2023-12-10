import { createUser, getUserByEmail, getUserByUname } from "@/db/models/user";
import { NextResponse } from "next/server";
import { z } from "zod";

//  CONTROLLER

const User = z.object({
  name: z.string().optional(),
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(5),
});

export async function POST(request: Request) {
  try {
    const body: { username: string; email: string; password: string } =
      await request.json();

    const validation = User.safeParse(body);

    if (!validation.success) {
      throw validation.error;
    }

    const isUname = await getUserByUname(body.username);

    if (isUname) {
      return NextResponse.json(
        {
          message: "Username must be unique",
        },
        {
          status: 401,
        }
      );
    }

    const isEmail = await getUserByEmail(body.email);

    if (isEmail) {
      return NextResponse.json(
        {
          message: "Email must be unique",
        },
        {
          status: 401,
        }
      );
    }

    const user = await createUser({
      username: body.username,
      email: body.email,
      password: body.password,
    });

    return NextResponse.json(
      {
        message: "You Succesfully Registered",
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
