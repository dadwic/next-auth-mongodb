import bcrypt from "bcrypt";
import dbConnect from "@/lib/dbConnect";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";
import User from "@/models/User";

const salt = bcrypt.genSaltSync(10);

export async function POST(request) {
  try {
    await dbConnect();
    const { email, password } = await request.json();
    await User.create({
      email,
      password: bcrypt.hashSync(password, salt),
    });
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
      const { email, password } = await req.json();
      await dbConnect();
      await User.findOneAndUpdate(
        {
          email: session.user.email,
        },
        { email, password: bcrypt.hashSync(password, salt) }
      );
      return Response.json({ message: "Profile updated!" }, { status: 200 });
    } catch (error) {
      return Response.json({ message: error.message }, { status: 500 });
    }
  } else {
    return Response.json({ message: "Unauthorized!" }, { status: 401 });
  }
}
