"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [numberOfPlayers, setNumberOfPlayers] = useState(1);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h2>Parent Information</h2>
        <input type="text" placeholder="name" />
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <input type="text" placeholder="phone" />
        <input
          type="number"
          placeholder="Number of Players"
          onChange={(e) => setNumberOfPlayers(e.target.value)}
        />

        {Array.from(numberOfPlayers).map((player) => (
          <>
            <h2>Player {numberOfPlayers}</h2>
            <input type="text" placeholder="Player Name" />
            <input type="date" placeholder="Date of Birth" />
            <select name="" id="">
              <option value="32">32 Weeks</option>
              <option value="64">64 Weeks</option>
            </select>
          </>
        ))}

        <button className="btn btn-primary">Register</button>
      </form>
    </section>
  );
}
