"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { MdOutlineDeleteOutline } from "react-icons/md";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [playersInputFields, setPlayersInputFields] = useState([
    {
      name: "",
      dob: null,
      sessions: 32,
    },
  ]);
  const handleChange = (e, index) => {
    let data = [...playersInputFields];
    console.log(e.target.name);
    data[index][e.target.name] = e.target.value;
    console.log(data[index]);
    setPlayersInputFields(data);
  };

  const addPlayer = () => {
    let newField = { name: "", dob: null, sessions: 32 };
    setPlayersInputFields((prev) => [...prev, newField]);
  };

  const removePlayer = (idx) => {
    const data = [...playersInputFields];
    data.splice(idx, 1);
    setPlayersInputFields(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, email, password, phone, ...playersInputFields };
    console.log(data);
    toast.success(`Thank you ${name} for Registring ${playersInputFields.length} kids`);
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setPhone("");
    const data = { name: "", dob: "", sessions: 32 }
    setPlayersInputFields([data]);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h2>Parent Information</h2>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        {playersInputFields.map((playerInput, i) => (
          <>
            <h2>
              Player {i + 1}{" "}
              {i > 0 && (
                <span type="button" onClick={() => removePlayer(i)}>
                  <MdOutlineDeleteOutline size={32} color="red" />
                </span>
              )}
            </h2>
            <input
              type="text"
              name="name"
              value={playerInput.name}
              placeholder="Player Name"
              onChange={(e) => handleChange(e, i)}
            />
            <input
              type="date"
              name="dob"
              value={playerInput.dob}
              placeholder="Date of Birth"
              onChange={(e) => handleChange(e, i)}
            />
            <select name="sessions" id="" onChange={(e) => handleChange(e, i)}>
              <option value="32">32 Weeks</option>
              <option value="64">64 Weeks</option>
            </select>
          </>
        ))}
        <button type="button" className="btn" onClick={addPlayer}>
          Add Player
        </button>
        <button className="btn btn-primary">Register</button>
      </form>
    </section>
  );
}
