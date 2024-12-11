import Program from "@/models/program";
import connectToDB from "@/utils/database";
import { sendEmail } from "@/utils/mail";
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
            dob: player.dob,
            comments: player.comments,
            parent: { name: parent, email, phone },
          },
        },
      });
      await sendEmail({
        sender: { name: "Ottawa Stars Soccer Academy", address: "admin@ottawastars.com" },
        receipients: [{ name: parent, address: email }],
        subject: "Thank you for Registering",
        message: `Thank you <strong>${parent}</strong> for registering <strong>${player.name}</strong>!<br/>To secure your spot, please complete the payment of the registration fees promptly. 
        Spots are limited and will be allocated on a first-come, first-served basis.<br/>
        Payments can be made via e-transfer to admin@ottawastars.com or by
        credit card online, which includes a 3% processing fee.<br/>If you have any questions,
        feel free to contact us at 613-884-1155.<br/> Thank you! <br/> Ottawa Stars Soccer Academy`,
      });
    }
    return NextResponse.json({ message: `Thank you!`, data }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: `error in registrations` }, { status: 500 });
  }
}
