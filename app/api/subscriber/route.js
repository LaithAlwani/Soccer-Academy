import Subscriber from "@/models/subscriber";
import connectToDB from "@/utils/database";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { email } = await req.json();
  console.log(email);
  try {
    await connectToDB();
    const sub = await Subscriber.findOne({ emai: email });
    if (!sub) await Subscriber.create({ email });
    else return NextResponse.json({ message: "Email address already exists!" })
    return NextResponse.json({ message: "Thank you!" }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Internal Error" }, { status: 500 });
  }
}
