"use client";

import { useEffect, useState } from "react";

// import Cart from "@/models/cart";
// import Program from "@/models/program"; //need to call the model to populate the programs
// import connectToDB from "@/utils/database";

// const getCart = async (id) => {
//   await connectToDB();
//   const cart = await Cart.findById({ _id: id }).populate({
//     path: "players.term",
//     model: "Program",
//   });

//   return cart;
// };

export default function CartPage() {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("cart")) setCart(JSON.parse(localStorage?.getItem("cart")));

    // if (!cart) return <h3>Cart is Empty</h3>;
  }, []);
  console.log(cart);
  // const { parent, players } = cart;
  let total = 0;
  const adjustTotal = (value) => {
    total += value;
  };

  //remove methond that removes a child and updates UI
  // Edit button that take user back to registration to edit thier entries.
  // save users cart in local storage for later use
  // add a cart button

  return cart &&
    <section>
      <h2>Thank you {cart.parent.name}</h2>
      <p>Please review your cart and make a payment.</p>
      {cart.players.map((player) => (
        <div key={player._id}>
          <h3>{player.name}</h3>
          <h3>{player.dob}</h3>
          <p>{player.term.title}</p>
          <p>${player.term.is_early_bird ? player.term.early_bird_price : player.term.price}</p>
          {adjustTotal(player.term.early_bird_price)}
          <span>remove</span>
        </div>
      ))}
      <h4>Total: {total}</h4>
      <button className="btn btn-primary">PayPal ${total}</button>
    </section>
  
}
