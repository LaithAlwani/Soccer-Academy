"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { MdOutlineDeleteOutline } from "react-icons/md";

export default function RegistrationForm({ programs }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [playersInputFields, setPlayersInputFields] = useState([
    {
      name: "",
      age: 0,
      gender: "male",
      comments: "",
      program: null,
    },
  ]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e, index) => {
    let data = [...playersInputFields];
    data[index][e.target.name] = e.target.value;
    setPlayersInputFields(data);
  };

  const addPlayer = () => {
    let newField = { name: "", age: 0, gender: "male", comments: "", program: null };
    setPlayersInputFields((prev) => [...prev, newField]);
  };

  const removePlayer = (idx) => {
    const data = [...playersInputFields];
    data.splice(idx, 1);
    setPlayersInputFields(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    for (const input of playersInputFields) {
      if (!input.program) return toast.error("please choose a program");
    }
    try {
      setLoading(true);
      const data = {
        parent: name,
        email,
        phone,
        players: [...playersInputFields],
      };
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({ data }),
      });
      if (res.ok) {
        router.push("/thank-you");
      }
    } catch (err) {
      toast.error("please try again, or contact us!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
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
            <select name="gender" onChange={(e) => handleChange(e, i)} required>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <select name="program" onChange={(e) => handleChange(e, i)} required>
              <option value="">Choose program</option>
              {programs.map((program) => (
                <option key={program._id} value={program._id}>
                  {program.title} {program.time}
                </option>
              ))}
            </select>
            {playerInput?.name && (
              <textarea
                name="comments"
                placeholder={`Is there anything we need about ${playerInput.name}? (optional)`}
                onChange={(e) => handleChange(e, i)}></textarea>
            )}
          </div>
        ))}
        <div className="btn-gorup">
          <button type="button" className="btn" onClick={addPlayer}>
            Add Player {playersInputFields.length + 1}
          </button>
          {/* <textarea rows={6} placeholder="Do you have any questions or concerns?" value={comments} onChange={e=>setComments(e.target.value)}/> */}
          {!loading ? (
            <button className="btn btn-primary" disabled={loading}>
              Register
            </button>
          ) : (
            <img src="/ball.gif" alt="soccer ball bouncing" className="ball-img" />
          )}
        </div>
      </form>
    </section>
  );
}
