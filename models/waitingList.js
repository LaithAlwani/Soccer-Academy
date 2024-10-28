import { model, models, Schema } from "mongoose";

const waitingListSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    message: { type: String },
  },
  { timestamps: true }
);

const waitingList = models.WaitingList || model("WaitingList", waitingListSchema);

export default waitingList;
