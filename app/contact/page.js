"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, email, topic, message };
    console.log(data);
    toast.success(`Thank you ${name}, Message Sent!`);
    setName("");
    setEmail("");
    setTopic("");
    setMessage("");
  };

  return (
    <section>
      <h2>Get In Touch</h2>
      <form onSubmit={handleSubmit}>
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
          name=""
          id=""
          rows={6}
          placeholder="Message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button className="btn btn-primary">Submit</button>
      </form>
    </section>
  );
}
