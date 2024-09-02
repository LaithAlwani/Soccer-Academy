import { model, models, Schema } from "mongoose";

const subscriberSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

const Subscriber = models.Subscriber || model("Subscriber", subscriberSchema);

export default Subscriber;