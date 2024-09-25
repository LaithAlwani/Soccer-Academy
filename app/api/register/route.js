import Cart from "@/models/cart";
import Player from "@/models/player";
import connectToDB from "@/utils/database";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { data } = await req.json();
  const { parent, email, phone, players } = data;
  try {
    await connectToDB();
    await players.forEach(async (player) => {
      console.log(player)
      const tempP = await Player.create({ ...player, parent, email, phone })
      console.log(tempP._id)
    })
    // const cart = await Cart.create({ parent, players, comments });
    return NextResponse.json({ message: `Thank you!`, data }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: `error in registrations` }, { status: 500 });
  }
}