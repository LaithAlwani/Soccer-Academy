"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import "@/styles/contact.css"

export default function ContactForm({ waitingList = false }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ name, email, phone, message, waitingList }),
      });
      if (res.ok) {
        const data = await res.json();
        toast.success(data.message);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section id="contact">
      <form onSubmit={handleSubmit}>
        {!waitingList ? (
          <h2>
            Have Questions?
            <br /> We’re Here to Help!
          </h2>
        ) : (
          <>
            <h2>
              What are you waiting for?!
              <br /> Join the waiting list!
            </h2>
            <span className="small">* Limited spots available</span>
          </>
        )}
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
          placeholder="Phone (optional)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <textarea
          name="message"
          rows={10}
          placeholder="Message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        {loading ? (
          <img src="/ball.gif" alt="soccer ball bouncing" className="ball-img" />
        ) : (
          <button className="btn btn-primary">Submit</button>
        )}
      </form>
    </section>
  );
}
