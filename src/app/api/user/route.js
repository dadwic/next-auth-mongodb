import dbConnect from "@/lib/dbConnect";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";
import User from "@/models/User";

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    await User.create(body);
    return Response.json(
      { message: "Registration successful! Please sign in." },
      { status: 201 }
    );
  } catch (error) {
    return Response.json({ message: error.message }, { status: 500 });
  }
}

export async function PUT(req) {
  const session = await getServerSession(authOptions);
  if (session) {
    try {
      await dbConnect();
      const body = await req.json();
      await User.findOneAndUpdate(
        {
          email: session.user.email,
        },
        body
      );
      return Response.json({ message: "Profile updated!" }, { status: 200 });
    } catch (error) {
      return Response.json({ message: error.message }, { status: 500 });
    }
  } else {
    return Response.json({ message: "Unauthorized!" }, { status: 401 });
  }
}
