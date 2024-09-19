import Cart from "@/models/cart";
import connectToDB from "@/utils/database";
import { SignOutButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

import React from "react";

const getPlayers = async () => {
  await connectToDB();
  const players = await Cart.find();
  return players;
};
export default async function AdminPage() {
  const { sessionClaims } = auth();

  // If the user does not have the admin role, redirect them to the home page
  if (sessionClaims?.metadata.role !== "admin") {
    return (
      <>
        <h1>Un Authorized Access.</h1>
        <p>This portal is only for Ottawa Stars staff</p>
        <SignOutButton className="btn btn-primary" />
      </>
    );
  }
  const allPlayers = await getPlayers();
  return (
    <section>
      <SignOutButton className="btn btn-primary" />

      {allPlayers.map((player) => {
        const { parent, players } = player;
        return (
          <div key={player._id}>
            <h3>{parent.name}</h3>
            <ul>
              <li>email: {parent.email}</li>
              <li>phone: {parent.phone}</li>

              <strong>players:</strong>
              <ul>
                {players.map((player, i) => (
                  <li key={i}>
                    {player.name} {player.age} {player.gender}
                  </li>
                ))}
              </ul>
            </ul>
          </div>
        );
      })}
    </section>
  );
}
