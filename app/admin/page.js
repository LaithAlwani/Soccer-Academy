import Player from "@/models/player";
import Program from "@/models/program";
import connectToDB from "@/utils/database";
import { SignOutButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

import React from "react";

const getPlayers = async () => {
  await connectToDB();
  const players = await Player.find().sort({"createdAt":-1}).populate("program")
    
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
      <h3>Number of registrations: {allPlayers.length}</h3>
      {allPlayers.map((player) => {
        const { parent, name, age, gender, comments, email, phone, program } = player;
        return (
          player && <div key={player._id}>
            
            <h3>{name}</h3>
            <ul>
              <li>age: {age}</li>
              <li>gender: {gender}</li>
              <li>email: {email}</li>
              <li>phone: {phone}</li>
              <li>
                parent:
                <strong>{parent}</strong>
              </li>
              <li>comments: {comments}</li>
              <li>program: {program?.title} {program?.time}</li>
            </ul>
           {player.waiver && <a href={player.waiver} className="btn">Waiver</a>}
          </div>
        );
      })}
    </section>
  );
}
