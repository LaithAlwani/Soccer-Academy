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
    time: String,

    sale_price: Number,
    spots_left: { type: Number, default: 0 },
    players: [{ type: Object }],
  },
  { timestamps: true }
);

const Program = models.Program || model("Program", programSchema);

export default Program;
