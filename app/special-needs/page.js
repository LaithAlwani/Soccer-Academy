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
      <Hero image="/hero-m.webp" alt="kids playing soccer" title="Inclusive Soccer Program" />
      <section>
        <h2>Empowering Every Child to Play, Connect, and Thrive</h2>
        <p>
          A soccer program designed to support children and teens with diverse needs—because every
          child deserves the chance to shine in a safe, inclusive environment."
        </p>
        <div className="btn-group">
          <a href="#about" className="btn">
            Learn More
          </a>
          <a href="#waiting-list" className="btn  btn-primary">
            Waiting List
          </a>
        </div>
      </section>
      <section id="about">
        <h2>About The Program</h2>
        <p>
          Does your child or teenager love soccer but face challenges that make joining a regular
          program difficult? Ottawa Stars Soccer Academy is excited to introduce a new, inclusive
          program crafted for children and teens who may experience social anxiety, ADHD,
          depression, low self-esteem, Autism, and more.
        </p>
        <p>
          Our goal is to create a fun, supportive environment where young athletes can learn, grow,
          and connect with others. With a structured yet flexible approach, we tailor training to
          meet each participant's needs, helping them build skills and confidence on and off the
          field.
        </p>
        <ul>
          <li>Skill Development: Learn soccer fundamentals in an adaptable way.</li>
          <li>Social Interaction: Opportunities for teamwork and friendship.</li>
          <li>Confidence Building: Activities focused on personal growth and self-esteem.</li>
          <li>
            Supportive Environment: Coaches with specialized training provide guidance suited to
            each child’s needs.
          </li>
        </ul>
        <h2>Who Can Join?</h2>
        <p>
          Our inclusive soccer program is open to children and teens facing a variety of challenges.
          We offer a supportive space tailored for those who may struggle in traditional sports
          programs. Our coaches and staff understand the unique needs of children with:
        </p>
        <ul>
          <li>
            <FaCheckCircle color="green" size={16} />
            <strong>Social Anxiety</strong>
          </li>
          <li>
            <FaCheckCircle color="green" size={16} />

            <strong>ADHD</strong>
          </li>
          <li>
            <FaCheckCircle color="green" size={16} />
            <strong>Autism</strong>
          </li>
          <li>
            <FaCheckCircle color="green" size={16} />
            <strong>Depression & Low Self-Esteem</strong>
          </li>
        </ul>
      </section>
      <section>
        <h2>Our Approach to Supportive Coaching</h2>
        Our coaches and support staff have extensive experience in Applied Behavior Analysis (ABA)
        and other intervention techniques. They understand the unique needs of each child and apply
        a personalized approach to ensure that every participant feels comfortable, supported, and
        encouraged. Key elements of our approach include:
        <ul>
          <li>
            Structured Routines: We provide consistent routines that help participants feel secure
            and engaged.
          </li>
          <li>
            Positive Reinforcement: Each child receives positive feedback and encouragement to build
            confidence.
          </li>
          <li>
            Social Skills Development: Group activities are designed to foster cooperation,
            communication, and friendship.
          </li>
          <li>
            Individualized Support: Our coaches adapt techniques to meet each child’s learning style
            and abilities."
          </li>
        </ul>
      </section>
      <section>
        <h2>Creating a Safe, Inclusive, and Enjoyable Environment</h2>
        <p>
          At Ottawa Stars Soccer Academy, we prioritize safety, inclusivity, and enjoyment. We
          maintain a low player-to-coach ratio (6:1) to provide individual attention and make sure
          that every child is supported. Before registration, we conduct a one-on-one assessment to
          understand each child’s needs, ensuring they’re placed in a group that best supports their
          growth.
        </p>
        <ul>
          <li>Player-to-Coach Ratio: 6:1 for personalized support</li>
          <li>Pre-Registration Assessment: Tailoring our approach to each child</li>
          <li>
            Encouraging Environment: A place where every child can feel comfortable and thrive
          </li>
        </ul>
      </section>
      <section>
        <h2>Program Pricing</h2>
        <p>
          We offer flexible options to accommodate your family’s schedule and ensure your child
          receives the support they need in a consistent, structured environment.
        </p>
        <h3>Pricing Options:</h3>
        <ul>
          <li>Once a Week: $399 per season</li>
          <li>Twice a Week: $599 per season</li>
        </ul>
        <p className="small">
          *Our pricing includes all program materials, personalized coaching, and ongoing support.
        </p>
      </section>
      <section>
        <h2>Join the Waiting List, Here’s How to Get Started</h2>
        <p>
          We’re excited to welcome your child to our inclusive soccer community! To get started:
        </p>
        <ul>
          <li>Join the waiting list by filling out the form below.</li>
          <li>
            Our team will be in touch within the next couple of weeks to arrange your initial
            assessment.
          </li>
          <li>
            Once the assessment is completed, finalize the registration by filling out the online
            form to secure your child’s place in the program.
          </li>
          <li>
            Become part of the Team: After registration, your child will be placed in a group
            tailored to their age and needs, ensuring a positive and rewarding experience.
          </li>
        </ul>

        <form onSubmit={handleSubmit} id="waiting-list">
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
