import ContactForm from "@/components/ContactForm";
import Program from "@/models/program";
import connectToDB from "@/utils/database";
import Image from "next/image";
import Link from "next/link";
import Map from "@/components/Map";
import { FaCheckCircle } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import Hero from "@/components/Hero";

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
        image="/hero-m.webp"
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
          and girls ages 5 to 12, we offer flexible, age-appropriate programs tailored to develop
          soccer skills, teamwork, and sportsmanship.
        </p>
      </div>
      <section id="program" className="">
        <h2>Our Program Offers:</h2>
        <ul>
          <li>
            <FaCheck color="green"  />
            <h3>Soccer Fundamentals and Skills</h3>
          </li>
          <li>
            <FaCheck color="green"  />
            <h3>Teamwork and Sportsmanship</h3>
          </li>
          <li>
            <FaCheck color="green"  />
            <h3>Experienced Coaches</h3>
          </li>
          <li>
            <FaCheck color="green" />
            <h3>Fun and Engaging Evironment</h3>
          </li>
        </ul>
      </section>
      <h2>Felxible Registration</h2>
      <section id="register" className="divided-container red-linear-bg">
        <div className="container">
          <div>
            <h3>1 Session per week</h3>
            <p>$199</p>
            
          </div>
          <div>
            <h3>2 Sessions per week</h3>
            <p>$399</p>
            <span className="small">*most player improvment</span>
          </div>
          <div>
            <h3>3 Sessions per week</h3>
            <p>$549</p>
            <span className="small">*Recommended for skilled players</span>
          </div>
        </div>
      </section>
      <section id="sponsors" className="school-intro">
        <h2>We are looking for sponsors</h2>
        <p>
          <strong>Ottawa Stars Soccer Academy </strong>is seeking sponsors! Packages start at $100/year and include
          amazing exposure opportunities, like having your logo on our website, advertisements,
          training shirts, and game shirts, plus mentions in our social media posts. The more you
          invest, the greater your brand's visibility across our platforms and events. Partner with
          us to make a meaningful impact and boost your brand!
        </p>
      </section>

      <section id="contact" className="red-linear-bg">
        <ContactForm />
      </section>
    </>
  );
}
