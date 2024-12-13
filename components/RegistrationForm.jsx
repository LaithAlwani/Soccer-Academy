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
  const [waiverSigned, setWaiverSigned] = useState(null);
  const [playersInputFields, setPlayersInputFields] = useState([
    {
      name: "",
      dob: null,
      gender: "male",
      comments: "",
      program: "",
    },
  ]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e, index) => {
    let data = [...playersInputFields];

    data[index][e.target.name] = e.target.value;

    setPlayersInputFields(data);
  };

  const addPlayer = () => {
    let newField = { name: "", dob: null, gender: "male", comments: "", program: "" };
    setPlayersInputFields((prev) => [...prev, newField]);
  };

  const removePlayer = (idx) => {
    const data = [...playersInputFields];
    data.splice(idx, 1);
    setPlayersInputFields(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!waiverSigned) {
      return toast.error("Please read and sign waiver by checking the box");
    }
    for (const input of playersInputFields) {
      if (!input.program) return toast.error("please choose a program");
    }
    try {
      setLoading(true);
      const data = {
        parent: name,
        email,
        phone,
        waiverSigned,
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
      setLoading(false);
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h2>Parent Information</h2>
        <label htmlFor="">Full Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <label htmlFor="">Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label htmlFor="">Phone Number:</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />

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
            <label htmlFor="">Full Name:</label>
            <input
              type="text"
              name="name"
              value={playerInput.name}
              onChange={(e) => handleChange(e, i)}
              required
            />
            <label htmlFor="">Date of Birth:</label>
            <input name="dob" type="date" onChange={(e) => handleChange(e, i)} required />
            <label htmlFor="">Choose Program:</label>
            <select
              name="program"
              id=""
              value={playerInput.program}
              onChange={(e) => handleChange(e, i)}>
              <option value="" disabled>
                Select a Program
              </option>
              {programs?.map((program) => (
                <option
                  key={program._id}
                  value={program._id}
                  disabled={12 - program.players.length <= 0}>
                  {program.title}{" "}
                  {12 - program.players.length <= 0
                    ? `(spots left: ${12 - program.players.length})`
                    : `${program.time} - $${program.sale_price} - (spots left: ${
                        12 - program.players.length
                      })`}
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
        <span className="waiver">
          <input
            type="checkbox"
            name="waiver"
            id="waiver"
            onChange={(e) => setWaiverSigned(e.target.checked)}
          />
          <label htmlFor="waiver">
            I have read, understood, and agree to the terms of the{" "}
            <a
              href="https://drive.google.com/file/d/1GxwTRJF34QDSJ5F8IfX17RJw1G9opGci/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer">
              ً<strong>wavier</strong>
            </a>
          </label>
        </span>
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
      </form>
    </section>
  );
}
