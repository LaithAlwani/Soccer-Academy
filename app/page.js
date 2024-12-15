import ContactForm from "@/components/ContactForm";
import Program from "@/models/program";
import connectToDB from "@/utils/database";
import { FaCheck } from "react-icons/fa6";
import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";

const getPrograms = async () => {
  await connectToDB();
  const programs = await Program.find().sort("createdAt");
  return programs;
};

export default async function Home() {
  const programs = await getPrograms();
  return (
    <>
      <Hero
        image="/hero_m.webp"
        altImage="/hero.webp"
        alt="ottawa stars hero image of youth playing soccer"
        styles="main-img"
      />
      <div className="btn-group">
        <a href="#program" aria-label="learn more about out programs" className="btn">
          Learn More
        </a>
        <a href="#register" aria-label="register a child" className="btn btn-primary">
          Register
        </a>
        <h1>Welcome to Ottawa Stars Soccer Academy</h1>
        <p className="school-intro">
          At <strong>Ottawa Stars Soccer Academy</strong>, we&apos;re committed to nurturing young
          soccer talents through high-quality coaching and a supportive environment. Open to boys
          and girls ages 5 to 12, we offer age-appropriate programs tailored to develop soccer
          skills, teamwork, and sportsmanship.
        </p>
      </div>
      <section id="program" className="">
        <h2>Our Program Offers:</h2>
        <ul>
          <li>
            <FaCheck className="check-mark" />
            <h3>Soccer Fundamentals and Skills</h3>
          </li>
          <li>
            <FaCheck className="check-mark" />
            <h3>Teamwork and Sportsmanship</h3>
          </li>
          <li>
            <FaCheck className="check-mark" />
            <h3>Experienced Coaches</h3>
          </li>
          <li>
            <FaCheck className="check-mark" />
            <h3>Fun and Engaging Evironment</h3>
          </li>
        </ul>
      </section>
      <section id="register" className=" ">
        <h2>Early Bird Pricing!</h2>
        <p className="small">Valid until January 20th 2025.</p>
        <div className="programs-container">
          {programs.map(({ _id, title, sub_title, price, sale_price, sessions, time, players }) => (
            <div key={_id} className="program-container">
              <h2>
                {title} <span className="small">*{sub_title}</span>
                <hr />
              </h2>
              <div className="progam-details">
                <span>
                  {sessions} session{sessions > 1 ? "s" : ""} / week
                </span>
                <span className="">{time}</span>
              </div>
              <h2 style={{ position: "relative", marginInline: "auto" }}>
                <span className="strikethrough">${price}</span> ${sale_price}
              </h2>
              <div>
                <Link href="/register" className="btn">
                  Register
                </Link>
                <span className="small">
                  *
                  {12 - players.length <= 0
                    ? `Join the waitinglist`
                    : `Only ${12 - players.length} spots left!`}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="small">
          *Prices are per season and includes <strong>training shirt</strong>, personalized coaching
          and ongoing support.
        </p>
      </section>
      <section id="sponsors" className="school-intro">
        <h2>We are looking for sponsors</h2>
        <p>
          <strong>Ottawa Stars Soccer Academy </strong>is seeking sponsors! Packages start at
          <strong> $100/year</strong> and include amazing exposure opportunities, like having your
          logo on our website, advertisements, training shirts, and game shirts, plus mentions in
          our social media posts. The more you invest, the greater your brand&apos;s visibility
          across our platforms and events. Partner with us to make a meaningful impact and boost
          your brand!
        </p>
      </section>
      <ContactForm />
    </>
  );
}
