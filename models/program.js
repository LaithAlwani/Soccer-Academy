import { model, models, Schema } from "mongoose";

const programSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    start_date: {
      type: String,
      required: true,
    },
    end_date: {
      type: String,
      required: true,
    },
    location: String,
    sessions: Number,
    sessions_length: Number,
    time: String,
    is_early_bird: Boolean,
    early_bird_price: Number,
    payment_link: {
      type: String,
      required: true,
    },
    test_payment_link: String,
  },
  { timestamps: true }
);

const Program = models.Program || model("Program", programSchema);

export default Program;
