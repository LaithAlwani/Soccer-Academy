import Cart from "@/models/cart";
import connectToDB from "@/utils/database";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { data } = await req.json();
  const { parent, players, comments } = data;
  try {
    await connectToDB();
    const cart = await Cart.create({ parent, players, comments });
    return NextResponse.json({ message: `Thank you!`, cart }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: `error in registrations` }, { status: 500 });
  }
}