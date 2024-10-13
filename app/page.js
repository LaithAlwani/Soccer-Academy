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
            src="/hero-m.webp"
            alt="ottawa stars hero image of youth playing soccer"
            priority
            quality={75}
            fill
          />
        </div>
        <div className="btn-group">
          <a href="#register" aria-label="register a child" className="btn btn-primary">
            Register
          </a>
          <a href="#program" aria-label="learn more about out programs" className="btn">
            Learn More
          </a>
          <p className="school-intro">
            Welcome to <strong>Ottawa Stars Soccer Academy</strong>, where young athletes embark on
            an exciting journey to learn soccer fundamentals. Our academy is dedicated to nurturing
            the talents of both boys and girls through top-tier training programs. Led by a seasoned
            coach with over 25 years of international youth development experience, we provide a
            supportive and dynamic environment that fosters growth, teamwork, and a lifelong passion
            for the beautiful game. Join us and watch your child thrive both on and off the field!
          </p>
        </div>
      </section>
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
            <h3>Youth Development Experienced Coaches</h3>
          </li>
          <li>
            <FaCheckCircle color="green" size={16} />
            <h3>Fun and Engaging Evironment</h3>
          </li>
        </ul>
      </section>
      <section id="register">
        <h2>Registerations:</h2>
        <h3 className="btn coupon">Early Bird discounts</h3>

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
              {/* <Link
                href={
                  process.env.NODE_ENV === "development"
                    ? program.test_payment_link
                    : program.payment_link
                }
                className="btn">
                Register
              </Link> */}
            </div>
          ))}
        </div>
      </section>
      <section id="location">
        <h2>Location:</h2>
        <div className="location-container">
          <div className="location-info">
            <p>
              All practices will be held at <strong>St. Patrick School.</strong>
            </p>

            <strong>68 Larkin Dr, Nepean, ON K2J 1A9</strong>
            <p>
              Weekdays between <strong>6:30-8:30PM</strong>
            </p>
            <p>
              please check{" "}
              <strong>
                <em>
                  <a href="#register" aria-label="register section">
                    Registeration
                  </a>
                </em>
              </strong>{" "}
              section for more information on time and date.
            </p>
          </div>
          <div className="map">
            <Image src="/location.webp" alt="practice location" fill />
          </div>
        </div>
      </section>
      <section id="coach">
        <h2>Meet the Head Coach!</h2>
        <div className="coach-img-wrapper">
          <Image
            src={"/coach.webp"}
            alt="coach rafed holding soccer ball with former FIFA president sepp Blatter"
            className="coach-rafed"
            fill
          />
          <span>*Coach Rafid with former FIFA president Sepp Blatter, Riyadh SA.</span>
        </div>
        <p>
          Coach Rafed Alwani is a Soccer Academies Consultant and a Canada Soccer certified coach
          with over 25 years of experience in youth soccer coaching and development. He began his
          coaching career with A.C. Fiorentina Canada, where he coached for seven years. In 2008, he
          moved to Saudi Arabia, where he coached Al-Nasser Club Youth for four years, established
          one of the country’s largest academies, and acted as a consultant for several soccer
          academies. Now back in Canada, Ottawa Stars Soccer Academy is his latest creation where
          players can have fun, develop, and achieve results.
        </p>
      </section>
      <section id="contact">
        <ContactForm />
      </section>
    </>
  );
}
