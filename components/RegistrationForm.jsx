"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";

export default function RegistrationForm({ programs }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comments, setComments] = useState("")
  const [playersInputFields, setPlayersInputFields] = useState([
    {
      name: "",
      age: 0,
      gender: "male",
    },
  ]);

  const handleChange = (e, index) => {
    let data = [...playersInputFields];
    data[index][e.target.name] = e.target.value;
    console.log(data)
    setPlayersInputFields(data);
  };

  const addPlayer = () => {
    let newField = { name: "", age: 0, gender: "male" };
    setPlayersInputFields((prev) => [...prev, newField]);
  };

  const removePlayer = (idx) => {
    const data = [...playersInputFields];
    data.splice(idx, 1);
    setPlayersInputFields(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      parent: { name, email, phone },
      players: [...playersInputFields],
      comments
    };
    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ data }),
    });
    if (res.ok) {
      router.push("/thank-you");
    }
  };

  return (
    <section>
        <h1>Payments arangments to be made after first practice</h1>
      <form onSubmit={handleSubmit}>
        <h2>Parent Information</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        {playersInputFields.map((playerInput, i) => (
          <div key={i}>
            <h2 className="player-info">
              Player {playersInputFields.length > 1 && i + 1} information
              {playersInputFields.length > 1 && (
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
              required
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              min="0"
              max="20"
              onChange={(e) => handleChange(e, i)}
              required
            />
            <select
              name="gender"
              id=""
              onChange={(e) => handleChange(e, i)}
              required
            >
              <option value="male">Boy</option>
              <option value="female">Girl</option>
            </select>
          </div>
        ))}
        <button type="button" className="btn" onClick={addPlayer}>
          Add Player
        </button>
        <textarea rows={6} placeholder="Do you have any questions or concerns?" value={comments} onChange={e=>setComments(e.target.value)}/>
        <button className="btn btn-primary">Register</button>
      </form>
    </section>
  );
}