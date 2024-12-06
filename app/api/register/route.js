import Program from "@/models/program";
import connectToDB from "@/utils/database";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { data } = await req.json();
  const { parent, email, phone, players } = data;
  try {
    await connectToDB();
    for (const player of players) {
      const { program } = player;

      await Program.findByIdAndUpdate(program, {
        $push: {
          players: {
            name: player.name,
            age: player.age,
            comments: player.comments,
            parent: { name: parent, email, phone },
          },
        },
      });
    }
    return NextResponse.json({ message: `Thank you!`, data }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: `error in registrations` }, { status: 500 });
  }
}
