"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { MdOutlineDeleteOutline, MdAdd } from "react-icons/md";

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
      programs: [],
    },
  ]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e, index) => {
    let data = [...playersInputFields];
    if (e.target.name === "programs") {
      if (e.target.checked) {
        data[index][e.target.name].push(e.target.value);
      } else {
        const idx = data[index][e.target.name].indexOf(e.target.value);

        if (idx > -1) {
          data[index][e.target.name].splice(idx, 1);
        }
      }
    } else {
      data[index][e.target.name] = e.target.value;
    }

    setPlayersInputFields(data);
  };

  const addPlayer = () => {
    let newField = { name: "", age: 0, gender: "male", comments: "", programs: [] };
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
      if (!input.programs.length) return toast.error("please choose a program");
    }
    console.log(playersInputFields);
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
            <select name="location" onChange={(e) => handleChange(e, i)} required>
              <option value="" selected hidden>
                Choose Location
              </option>
              <option value="st. patrik">St. Patrik School, 68 Larkin Dr.</option>
              <option value="st. mary">St. Mary School, 5536 Bank St.</option>
            </select>
            <div className={`programs-grid ${playerInput.location ? "open" : ""}`}>
              {playerInput.location &&
                programs
                  .filter((program) => program.location === playerInput.location)
                  .map((program) => (
                    <div key={program._id}>
                      <input
                        type="checkbox"
                        id={program._id}
                        name="programs"
                        onChange={(e) => handleChange(e, i)}
                        value={program._id}
                      />
                      <label>
                        {program.title} {program.time}
                      </label>
                    </div>
                  ))}
            </div>
            {playerInput?.name && (
              <textarea
                name="comments"
                placeholder={`Is there anything we need about ${playerInput.name}? (optional)`}
                onChange={(e) => handleChange(e, i)}></textarea>
            )}
          </div>
        ))}
        <div className="btn-gorup">
          <span type="button" className="add-player" onClick={addPlayer}>
            Add Player <MdAdd />
          </span>
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
