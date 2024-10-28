"use client";

import Hero from "@/components/Hero";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaCheckCircle } from "react-icons/fa";

export default function SpecialNeedsPage() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState();

  const reset = () => {
    setName("");
    setEmail("");
    setMessage("");
    setPhone("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/waiting-list", {
        method: "POST",
        body: JSON.stringify({ name, email, phone, message }),
      });
      if (res.ok) {
        const data = await res.json();
        toast.success(data.message);
        reset();
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Hero image="/hero-m.webp" alt="kids playing soccer" title="Special Needs Program" />
      <section>
        <h2>A Soccer Program Tailored for All Abilities</h2>
        <p>
          At Ottawa Stars Soccer Academy, we are committed to providing a safe, inclusive, and
          encouraging soccer program tailored for children with unique needs, such as ADHD and
          Autism. This program aims to help children build skills, connect with others, and have
          fun, all within a supportive environment crafted just for them.
        </p>

        <h2>Why Choose Us?</h2>
        <p>
          With over 12 years of experience supporting children and youth with mental health
          challenges, Ottawa Stars Soccer Academy has the knowledge and commitment needed to foster
          a positive, empowering environment for all our players.
        </p>
        <h3>Experienced Support: </h3>
        <p>
          Our team has extensive experience working with children who have Autism, ADHD, anxiety,
          depression, and low self-esteem.
        </p>

        <h3>Applied Behavior Analysis (ABA) Therapy: </h3>
        <p>
          Our expertise in ABA therapy allows us to meet each child’s unique needs, helping them
          succeed both on and off the field.
        </p>
      </section>
      <section>
        <h2>What Makes Our Program Unique</h2>
        <ul>
          <li>
            <FaCheckCircle color="green" size={16} />
            <strong>Modified Practice Sessions</strong>
          </li>
          <li>
            <FaCheckCircle color="green" size={16} />

            <strong>6:1 Player-to-Coach Ratio</strong>
          </li>
          <li>
            <FaCheckCircle color="green" size={16} />
            <strong>Focus on Fun and Positive Growth</strong>
          </li>
        </ul>
      </section>
      <section>
        <h2>Personalized Assessment</h2>
        <p>
          Each player will undergo a brief assessment to understand their needs and ensure they feel
          comfortable and supported in our program.
        </p>
      </section>
      <section>
        <h2>Join the Waiting List</h2>
        <p>
          <strong>Interested in enrolling your child?</strong> Sign up for our waiting list to receive updates on
          assessments and openings!
        </p>
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
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <textarea
            name=""
            id=""
            rows={10}
            value={message}
            placeholder="Let us know about your child"
            onChange={(e) => setMessage(e.target.value)}></textarea>
          {!loading ? (
            <button className="btn">Join Waiting List</button>
          ) : (
            <img src="/ball.gif" alt="soccer ball bouncing" className="ball-img" />
          )}
        </form>
      </section>
    </>
  );
}
