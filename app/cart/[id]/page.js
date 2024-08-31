import Cart from "@/models/cart";
import connectToDB from "@/utils/database";

const getCart = async (id) => {
  await connectToDB();
  const cart = await Cart.findById({ _id: id }).populate({
    path: "players.term",
    model: "Program",
  });

  return cart;
};

export default async function CartPage({ params }) {
  const cart = await getCart(params.id);
  const { parent, players } = cart;
  let total = 0;
  const adjustTotal = (value) => {
    total += value;
  };

  //remove methond that removes a child and updates UI 
  // Edit button that take user back to registration to edit thier entries.
  // save users cart in local storage for later use
  // add a cart button

  return (
    <section>
      <h2>Thank you {parent.name}</h2>
      <p>Please review your cart and make a payment.</p>
      {players.map((player) => (
        <>
          <h3>{player.name}</h3>
          <p>{player.term.title}</p>
          <p>${player.term.is_early_bird ? player.term.early_bird_price : player.term.price}</p>
          {adjustTotal(player.term.early_bird_price)}
          <span>remove</span>
        </>
      ))}
      <h4>Total: {total}</h4>
      <button className="btn btn-primary">PayPal  ${total}</button>
    </section>
  );
}
