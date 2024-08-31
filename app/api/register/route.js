import Cart from "@/models/cart";
import connectToDB from "@/utils/database";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { data } = await req.json();
  const { parent, players } = data;
  try {
    await connectToDB();
    const cart = await Cart.create({ parent, players });
    return NextResponse.json({ message: `please compelete payment`, cart }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: `error in creating cart` }, { status: 500 });
  }
}
