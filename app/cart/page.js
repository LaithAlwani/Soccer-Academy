"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

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

  const removeCartItem = (player) => {
    const data = cart.players;
    const players = data.filter((pl) => pl.name !== player.name);
    const newData = { parent: cart.parent, players };
    localStorage.setItem("cart", JSON.stringify(newData));
    setCart(newData);
  };

  useEffect(() => {
    if (localStorage.getItem("cart")) setCart(JSON.parse(localStorage?.getItem("cart")));

    // if (!cart) return <h3>Cart is Empty</h3>;
  }, []);

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      toast.success("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      toast.error("Order canceled -- continue to shop around and checkout when you’re ready.");
    }
  }, []);

  // const { parent, players } = cart;
  let total = 0;
  const adjustTotal = (value) => {
    total += value;
  };

  //remove methond that removes a child and updates UI
  // Edit button that take user back to registration to edit thier entries.
  // save users cart in local storage for later use
  // add a cart button

  return cart && cart.players.length > 0 ? (
    <section>
      <h2>Thank you {cart.parent.name}</h2>
      <p>Please review your cart and make a payment.</p>
      {cart.players.map((player, idx) => (
        <div key={idx}>
          <h3>{player.name}</h3>
          <h3>{player.dob}</h3>
          <p>{player.term.title}</p>
          <p>${player.term.is_early_bird ? player.term.early_bird_price : player.term.price}</p>
          {adjustTotal(player.term.early_bird_price)}
          <span onClick={() => removeCartItem(player)}>remove</span>
        </div>
      ))}
      <h4>Total: {total}</h4>
      <form action="/api/checkout_sessions" method="POST">
        <section>
          <button type="submit" role="link">
            Checkout
          </button>
        </section>
      </form>
    </section>
  ) : (
    <h3>Cart is Empty</h3>
  );
}
