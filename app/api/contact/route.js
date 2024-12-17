import { sendEmail } from "@/utils/mail";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { name, email, phone, message, waitingList } = await req.json();
  const sender = {
    name: "Ottawa Stars Soccer Academy",
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
      receipients,
      subject: waitingList ? "Appointment Request" : "Inquiry Recived",
      message: `<h1>Thank you!</h1>
      <p>Hello ${name},</p>
      <p>Thank you for ${waitingList ? "requsting an appointment" : "contacting us"}</p>
      ${
        waitingList
          ? "<p>An email will be sent next couple of weeks with instructions on how to book a time slot for the assessment.</p>"
          : "<p>A Ottawa Stars representitive will contact you within 24 hours</p>"
      }
       <p>Phone: ${phone}</p>
       <pre>${message}</pre>
      `,
    });
    return NextResponse.json({ message: `Thank you ${name}!` });
  } catch (err) {
    return NextResponse.json({ message: `Unable to send request` }, { status: 500 });
  }
}
