import { model, models, Schema } from "mongoose";

const playerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    parent: {
      type: String,
      required: true,
    },
    comments: String,
    program: {
      type: Schema.Types.ObjectId,
      ref: "Program",
    },
  },
  { timestamps: true }
);

const Player = models.Player || model("Player", playerSchema);

export default Player;
