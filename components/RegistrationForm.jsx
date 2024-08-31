"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { MdOutlineDeleteOutline } from "react-icons/md";

export default function RegistrationForm({ programs }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [playersInputFields, setPlayersInputFields] = useState([
    {
      name: "",
      dob: null,
      gender: "male",
      term: programs[0]._id,
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
    let newField = { name: "", dob: null, gender: "male", term: programs[0]._id };
    setPlayersInputFields((prev) => [...prev, newField]);
  };

  const removePlayer = (idx) => {
    const data = [...playersInputFields];
    data.splice(idx, 1);
    setPlayersInputFields(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { parent: { name, email, password, phone }, players: [...playersInputFields] };
    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ data }),
    });
    if (res.ok) {
      const data = await res.json();
      toast.success(data.message);
      router.push(`cart/${data.cart._id}`);
      resetForm();
    }
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setPhone("");
    const data = { name: "", dob: "", sessions: 32 };
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
          required
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="password (optional)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span>
          *adding a password will create an account, login in makes kids registration easier.
        </span>
        <input
          type="text"
          placeholder="phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        {playersInputFields.map((playerInput, i) => (
          <>
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
              type="date"
              name="dob"
              value={playerInput.dob}
              placeholder="Date of Birth"
              onChange={(e) => handleChange(e, i)}
              required
            />
            <select name="gender" id="" onChange={(e) => handleChange(e, i)} required>
              <option value="male">Boys</option>
              <option value="female">Girls</option>
            </select>
            <select name="term" id="" onChange={(e) => handleChange(e, i)} required>
              {programs.map((program) => (
                <option key={program._id} value={program._id}>
                  {program.title}
                </option>
              ))}
            </select>
          </>
        ))}
        <button type="button" className="btn" onClick={addPlayer}>
          Add Player
        </button>
        <button className="btn btn-primary">Checkout</button>
      </form>
    </section>
  );
}
