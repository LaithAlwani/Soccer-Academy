import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const payload = await req.text();
  const res = JSON.parse(payload);

  const sig = req.headers.get("Stripe-Signature");

  const dateTime = new Date(res?.created * 1000).toLocaleDateString();
  const timeString = new Date(res?.created * 1000).toLocaleDateString();

  try {
    let event = stripe.webhooks.constructEvent(payload, sig, process.env.STRIPE_WEBHOOK_SECRET_KEY);
    console.log("event", event.type);


    switch (event.type) {
      case 'charge.succeeded':
        const chargeSucceeded = event.data.object;
        console.log("charge",chargeSucceeded)
        // Then define and call a function to handle the event charge.succeeded
        break;
      case 'payment_intent.canceled':
        const paymentIntentCanceled = event.data.object;
        console.log("canceled",paymentIntentCanceled)
        // Then define and call a function to handle the event payment_intent.canceled
        break;
      case 'payment_intent.created':
        const paymentIntentCreated = event.data.object;
        console.log("created", paymentIntentCreated)
        // Then define and call a function to handle the event payment_intent.created
        break;
      case 'payment_intent.succeeded':
        const paymentIntentSucceeded = event.data.object;
        console.log("payment", paymentIntentSucceeded)
        // Then define and call a function to handle the event payment_intent.succeeded
        break;
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
    return NextResponse.json({ status: "success", event: event.type });
  } catch (err) {
    return NextResponse.json({ stauts: "failed", err });
  }
}
