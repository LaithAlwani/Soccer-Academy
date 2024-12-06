import Player from "@/models/player";
import Program from "@/models/program";
import connectToDB from "@/utils/database";
import { SignOutButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { MdPhone } from "react-icons/md";

import React from "react";

const getPlayers = async () => {
  await connectToDB();
  const players = await Program.find().sort({ createdAt: 1 }).populate("players");
  console.log(players);
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
        <SignOutButton redirecturl="/" className="btn btn-primary" />
      </>
    );
  }
  const programs = await getPlayers();

  return (
    <section>
      <SignOutButton className="btn btn-primary" />
      <h3>Number of registrations: {programs.length}</h3>
      {programs.map((program) => (
        <>
          <details open>
            <summary>{program.title}</summary>
            <p>
              Total players: <strong>{program.players.length}</strong>
            </p>
            <ul>
              {program.players.map((player, i) => (
                <details key={i}>
                  <summary>
                    <strong>{player.name}</strong>
                  </summary>
                  <ul>
                    <li>age: {player.age}</li>
                    <li>parent: {player.parent.name}</li>
                    <li>
                      email: <a href={`mailto:{player.parent.email}`}>{player.parent.email}</a>
                    </li>
                    <li>
                      phone:{player.parent.phone}
                      <a  href={`tel:+${player.parent.phone}`}>
                        <MdPhone color="red" size={24} />
                      </a>
                    </li>
                    <li>
                      <pre>{player.comments}</pre>
                    </li>
                  </ul>
                  <hr />
                </details>
              ))}
            </ul>
          </details>
          <hr />
        </>
      ))}
    </section>
  );
}
