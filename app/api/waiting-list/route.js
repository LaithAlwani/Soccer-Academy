import WaitingList from "@/models/waitingList";
import connectToDB from "@/utils/database";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { name, email, phone, message } = await req.json();

  try {
    await connectToDB();
    await WaitingList.create({ name, email, phone, message });
    return NextResponse.json(
      { message: `You are on the waiting list. Thank you, ${name}.` },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ message: `Error` }, { status: 500 });
  }
}
