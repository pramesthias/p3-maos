import { createUser, getUsers } from "@/db/models/user";
import { z } from "zod";

// export const dynamic = 'force-dynamic' // defaults to force-static
export async function GET(request: Request) {
  const users = await getUsers();
  return Response.json(
    {
      statusCode: 200,
      message: "Message from /api/users",
      data: users,
    },
    {
      status: 200,
    }
  );
}

// export async function POST(request: Request) {
//   try {
//     const data = await request.json();

//     const parsedData = z
//       .object({
//         name: z.string().optional(),
//         username: z.string(),
//         email: z.string().email(),
//         password: z.string().min(5),
//       })
//       .safeParse(data);

//     if (!parsedData.success) {
//       throw parsedData.error;
//     }

//     const newUser = await createUser(data);
//     return Response.json(
//       {
//         statusCode: 201,
//         message: "Message from POST /api/users",
//         data: newUser,
//       },
//       {
//         status: 201,
//       }
//     );
//   } catch (err) {
//     if (err instanceof z.ZodError) {
//       return Response.json(
//         {
//           statusCode: 400,
//           message: "Error from POST /api/users",
//           error: err,
//         },
//         {
//           status: 400,
//         }
//       );
//     }

//     return Response.json(
//       {
//         statusCode: 500,
//         message: "Internal Server Error",
//       },
//       {
//         status: 500,
//       }
//     );
//   }
// }
