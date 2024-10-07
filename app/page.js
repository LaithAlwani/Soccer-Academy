import ContactForm from "@/components/ContactForm";
import Program from "@/models/program";
import connectToDB from "@/utils/database";
import Image from "next/image";
import Link from "next/link";
import Map from "@/components/Map";
import { FaCheckCircle } from "react-icons/fa";

const getPrograms = async () => {
  await connectToDB();
  const programs = await Program.find().sort("createdAt");
  return programs;
};

export default async function Home() {
  const programs = await getPrograms();
  return (
    <>
      <section id="hero">
        <div className="hero-img-wrapper">
          <Image
            src="/hero-m.jpg"
            alt="ottawa stars hero image of youth playing soccer"
            priority
            fill
            className=""
          />
        </div>
        
        <div className="btn-group">
          <a href="#register" className="btn btn-primary">
            Register
          </a>
          <a href="#program" className="btn">
            Learn More
          </a>
          <h1>Welcome to Ottawa Stars Soccer Academy</h1>
          <p className="school-intro">
            At <strong>Ottawa Stars Soccer Academy</strong>, we&apos;re committed to nurturing young
            soccer talents through high-quality coaching and a supportive environment. Open to boys
            and girls ages 5-12, we offer flexible, age-appropriate programs tailored to develop
            soccer skills, teamwork, and sportsmanship.
          </p>
        </div>
      </section>
      <section id="program" className="">
        <h2>Why Choose Ottawa Stars?</h2>
        <ul>
          <li>
            <FaCheckCircle color="green" size={24} style={{ minWidth: "24" }} />
            <p>
              <strong>Experienced Coaching:</strong> Led by Coach Rafed, with 25+ years of
              expertise.
            </p>
          </li>
          <li>
            <FaCheckCircle color="green" size={24} style={{ minWidth: "24" }} />
            <p>
              <strong>Skill Development:</strong> Tailored programs to build fundamentals and
              advanced techniques.
            </p>
          </li>
          <li>
            <FaCheckCircle color="green" size={24} style={{ minWidth: "24" }} />
            <p>
              <strong>Supportive Environment: </strong>
              Promoting teamwork, discipline, and sportsmanship.
            </p>
          </li>
          <li>
            <FaCheckCircle color="green" size={24} style={{ minWidth: "24" }} />
            <p>
              <strong>Small Group Sizes:</strong> Ensuring personalized attention for every player.
            </p>
          </li>
          <li>
            <FaCheckCircle color="green" size={24} style={{ minWidth: "24" }} />
            <p>
              <strong>Flexible Pricing:</strong> Affordable rates with financing options through
              Affirm.
            </p>
          </li>
        </ul>
      </section>
      <section id="register">
        <h2>Register Now!</h2>
        <h3>Our Age Groups:</h3>
        <ul>
          <li>
            <strong>U7 (Ages 5-6):</strong> Learn soccer fundamentals in a fun and engaging way.
          </li>
          <li>
            <strong>U9 (Ages 7-8):</strong> Enhance technical skills and game understanding.
          </li>
          <li>
            <strong>U11 (Ages 9-10):</strong> Develop advanced skills and tactical knowledge.
          </li>
        </ul>

        <h3>Flexible Registration Options</h3>
        <p>
          We offer three registration options, allowing you to choose what works best for your
          schedule:
        </p>
        <ul>
          <li><strong>1 session per week:</strong> $250 per season*</li>
          <li><strong>2 session per week:</strong> $475 per season*</li>
          <li><strong>3 session per week:</strong> $650 per season*</li>
        </ul>
        <p className="small">
          * Each season runs for approximately <strong>4 months</strong>, giving your child plenty of
          time to grow, develop their skills, and enjoy the game.
        </p>
        <div className="btn-group">
        <Link href="/programs" className="btn btn-primary">
            Learn More
          </Link>
          <Link href="/register" className="btn">
            Register Now
          </Link>
        </div>
        {/* <h2>Registerations:</h2>
        <h3 className="coupon">Early Bird discounts</h3>

        <div className="programs-container">
          {programs.map((program) => (
            <div key={program._id} className="program">
              <h2>{program.title}</h2>
              {program.spots_left > 0 && (
                <span className="sale-price-container">
                  <img src="/bubble.png" alt="" />
                  <h3 className="sale-price">${program.sale_price}</h3>
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
                <Link href="/register" className="btn">
                  Join waiting list
                </Link>
              ) : (
                <Link href="/register" className="btn">
                  Register
                </Link>
              )}
              <span className="small">*Payment is to be made at first practice.</span>
              {program.spots_left < 10 && program.spots_left > 0 && (
                <span className="small red">Only {program.spots_left} spots left!</span>
              )}
              {program.spots_left === 0 && <span className="small red">Program is Full</span>}
             <Link
                href={
                  process.env.NODE_ENV === "development"
                    ? program.test_payment_link
                    : program.payment_link
                }
                className="btn">
                Register
              </Link>
            </div>
          ))} 
        </div>*/}
      </section>
      <section id="location">
        <h2>Location:</h2>
        <div className="location-container">
          <div className="location-info">
            <p>
              All practices will be held at{" "}
              <strong style={{ fontSize: "1.2rem" }}>St. Patrick School.</strong>
            </p>

            <strong>68 Larkin Dr, Nepean, ON K2J 1A9</strong>
            <p>
              Weekdays between <strong>6:30-8:30PM</strong>
            </p>
            <p>
              please check{" "}
              <strong>
                <em>
                  <a href="#register">Registeration</a>
                </em>
              </strong>{" "}
              section for more information on time and date.
            </p>
          </div>
          <img src="/location.png" alt="" className="map" />
        </div>
      </section>
     
      <section id="contact">
        <h2>Let&apos;s Get in Touch</h2>
        <ContactForm />
      </section>
    </>
  );
}
