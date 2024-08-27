import Request from "@/models/request";
import connectToDB from "@/utils/database";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { name, email, topic, message }  = await req.json();
  
  try {
    await connectToDB()
    await Request.create({name, email, topic, message})
    return NextResponse.json(
      { message: `Request sent. Thank you, ${name}.` },
      { status: 201 }
    );
  }
  catch (err) {
    return NextResponse.json(
      { message: `Error` },
      { status: 500 }
    );
  }
}
