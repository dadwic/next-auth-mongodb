import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    const user = await User.create(body);
    return Response.json({ success: true, data: user }, { status: 201 });
  } catch (error) {
    return Response.json({ success: error.message }, { status: 500 });
  }
}
