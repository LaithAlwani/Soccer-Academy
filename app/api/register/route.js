import { NextResponse } from "next/server";

export async function POST(req) {
  const { data } = await req.json();
  console.log(data);
  return NextResponse.json({message:`Registarion complete, Thank you!`},{status:201})
}