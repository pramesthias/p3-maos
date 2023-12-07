import { getUsers } from "@/db/models/user";

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
