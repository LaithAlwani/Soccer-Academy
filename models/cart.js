import { model, models, Schema } from "mongoose";

const cartSchema = new Schema(
  {
    parent: {
      name: { type: String, required: true },
      email: { type: String, required: true },
      // password: { type: String },
      phone: { type: String, required: true },
      
    },
    players: [
      {
        name: { type: String, required: true },
        age: { type: Number, required: true },
        gender: { type: String, required: true },
      },
    ],
    comments:{type:String},
  },
  { timestamps: true }
);

const Cart = models.Cart || model("Cart", cartSchema);

export default Cart;
