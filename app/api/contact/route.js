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
      message: `
      <h3>${topic}</3>
      <p>An inquiry has been recieved from <strong>${name}</strong></p>
       <p>email: ${email}</p>
       <pre>${message}</pre>`,
    });
    const result = await sendEmail({
      sender,
      receipients,
      subject: "Inquiry Recived",
      message: `<h1>Thank you!</h1>
      <p>Hi ${name},</p>
      <p>Thank you for contacting us</p>
      <p>An Ottawa Stars admin will contact you as soon as possible</p>`,
    });
    return NextResponse.json({ message: result.accepted });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: `Unable to send request` },
      { status: 500 }
    );
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
