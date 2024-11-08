import ContactForm from "@/components/ContactForm";
import Program from "@/models/program";
import connectToDB from "@/utils/database";
import Image from "next/image";
import Link from "next/link";
import Map from "@/components/Map";
import { FaCheckCircle } from "react-icons/fa";
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
            <FaCheckCircle color="green" size={16} />
            <h3>Soccer Fundamentals and Skills</h3>
          </li>
          <li>
            <FaCheckCircle color="green" size={16} />
            <h3>Teamwork and Sportsmanship</h3>
          </li>
          <li>
            <FaCheckCircle color="green" size={16} />
            <h3>Experienced Coaches</h3>
          </li>
          <li>
            <FaCheckCircle color="green" size={16} />
            <h3>Fun and Engaging Evironment</h3>
          </li>
        </ul>
      </section>
      <h2>Felxible Registration</h2>
      <section className="divided-container red-linear-bg">
        <div>
          <h3>1 Session per week</h3>
          <p>$240</p>
          <span className="small">*Recommended for beginners</span>
        </div>
        <div>
          <h3>2 Sessions per week</h3>
          <p>$450</p>
          <span className="small">*Recommended for most improvment</span>
        </div>
        <div>
          <h3>3 Sessions per week</h3>
          <p>$600</p>
          <span className="small">*Recommended for skilled players</span>
        </div>
      </section>
      <section id="sponsors" className="black-linear-bg">
        <h2>We are looking to sponsor</h2>
        <ul>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus pariatur aut,
            officiis culpa hic autem sit fugit vel!{" "}
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus pariatur aut,
            officiis culpa hic autem sit fugit vel!
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus pariatur aut,
            officiis culpa hic autem sit fugit vel!{" "}
          </li>
        </ul>
      </section>
      {/* <section id="register">
        <h2>Registerations:</h2>
        <div className="programs-container">
          {programs.map((program) => (
            <div key={program._id} className="program">
              <h2>{program.title}</h2>
              {program.spots_left > 0 && (
                <span className="sale-price-container">
                  <span className="bubble-container">
                    <Image src="/bubble.webp" alt="bubble icon" fill />
                  </span>
                  <span className="sale-price">${program.sale_price}</span>
                </span>
              )}
              <h3 className={program.spots_left > 0 ? "price" : ""}>${program.price}</h3>
              <ul>
                <li>{program.time}</li>
                <li>
                  {program.start_date} - {program.end_date}
                </li>
              </ul>
              {program.spots_left === 0 ? (
                <Link href="/register" aria-label="Join the waiting list" className="btn">
                  Join waiting list
                </Link>
              ) : (
                <Link href="/register" aria-label="register now" className="btn">
                  Register
                </Link>
              )}
              {program.spots_left < 10 && program.spots_left > 0 && (
                <span className="small red">Only {program.spots_left} spots left!</span>
              )}
              {program.spots_left === 0 && <span className="small red">Program is Full</span>}
              
            </div>
          ))}
        </div>
      </section> */}

      <section id="contact" className="red-linear-bg">
        <ContactForm />
      </section>
    </>
  );
}
