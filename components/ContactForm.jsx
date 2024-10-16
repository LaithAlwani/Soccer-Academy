"use client";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ name, email, topic, message }),
      });
      if (res.ok) {
        const data = await res.json();
        toast.success(data.message);
        setName("");
        setEmail("");
        setTopic("");
        setMessage("");
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h2>Have Questions? We’re Here to Help!</h2>
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
          placeholder="Topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
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
          <img
            src="/ball.gif"
            alt="soccer ball bouncing"
            className="ball-img"
          />
        ) : (
          <button className="btn btn-primary">Submit</button>
        )}
      </form>
    </section>
  );
}
