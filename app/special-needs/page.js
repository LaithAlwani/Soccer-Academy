"use client";
import { useState } from "react";
import toast from "react-hot-toast";

export default function SpecialNeedsPage() {
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/subscriber", {
      method: "POST",
      body: JSON.stringify({ email }),
    });
    if (res.ok) {
      const data = await res.json();
      toast.success(data.message);
      setEmail("");
    } else {
      toast.error("Internal error");
    }
  };
  return (
    <section className="animate__animated animate__fadeIn">
      <form onSubmit={handleSubmit}>
        <h2>Special Needs program</h2>
        <p>More information coming soon!</p>
        <span>Sign up to our news letter to learn more</span>
        <input
          type="email"
          placeholder="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn btn-primary">Subscribe</button>
      </form>
    </section>
  );
}
