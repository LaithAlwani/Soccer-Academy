import Request from "@/models/request";
import connectToDB from "@/utils/database";
import { sendEmail } from "@/utils/mail";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { name, email, topic, message } = await req.json();
  const sender = {
    name: "Ottawa Stars",
    address: "admin@ottawastars.com",
  };
  const receipients = [
    {
      name,
      address: email,
    },
  ];
  try {
    await sendEmail({
      sender,
      receipients: sender.address,
      subject: topic,
      message: `${name} 
       email: ${email} 
    ${message}`,
    });
    const result = await sendEmail({
      sender,
      receipients,
      subject: "Inquiry Recived",
      message:
        "Thank you for contacting us, an Ottawa Stars admin will contact you as soon as possible",
    });
    return NextResponse.json({ message: `Thank you ${name}!` });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: `Unable to send request` }, { status: 500 });
  }

  // try {
  //   await connectToDB()
  //   await Request.create({name, email, topic, message})
  //   return NextResponse.json(
  //     { message: `Request sent. Thank you, ${name}.` },
  //     { status: 201 }
  //   );
  // }
  // catch (err) {
  //   return NextResponse.json(
  //     { message: `Error` },
  //     { status: 500 }
  //   );
  // }
}
