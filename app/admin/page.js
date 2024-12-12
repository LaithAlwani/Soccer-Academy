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
      {programs.map(({_id, title, players}) => (
        <div key={_id}>
          <details>
            <summary>
              <strong>
                {title} ({players.length})
              </strong>
            </summary>
            <ul>
              {players.map(({ name, dob, parent, comments }, i) => (
                <details key={i}>
                  <summary>
                    <strong>
                      {name} ({dob})
                    </strong>
                  </summary>
                  <ul>
                    <li>{parent.name}</li>
                    <li>
                      <a href={`mailto:{player.parent.email}`}>{parent.email}</a>
                    </li>
                    <li>
                      {parent.phone}
                      <a href={`tel:+${parent.phone}`}>
                        <MdPhone color="red" size={24} />
                      </a>
                    </li>
                  </ul>
                  {comments && <pre>{comments}</pre>}
                  <hr />
                </details>
              ))}
            </ul>
          </details>
          <hr />
        </div>
      ))}
      <SignOutButton className="btn btn-primary" redirectUrl="/" />
    </section>
  );
}
