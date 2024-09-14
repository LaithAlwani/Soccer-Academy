import ContactForm from "@/components/ContactForm";
import Program from "@/models/program";
import connectToDB from "@/utils/database";
import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

const getPrograms = async () => {
  await connectToDB();
  const programs = await Program.find().sort("title");
  return programs;
};

export default async function Home() {
  const programs = await getPrograms();
  return (
    <>
      <section id="hero">
        <div className="hero-img-wrapper">
          <Image
            // src="https://t3.ftcdn.net/jpg/02/06/97/12/360_F_206971263_PGblLDBkfmhCNSHC6zoCOQEf2BwSsFb7.jpg"
            src="/hero.png"
            alt=""
            priority
            fill
            className="animate__animated animate__fadeIn animate__slow"
          />
        </div>
        <div className="btn-group animate__animated animate__fadeIn animate__slow">
          <p className="school-intro">
            Welcome to Ottawa Stars Soccer Academy, where young athletes embark on an exciting
            journey to learn soccer fundamentals. Our academy is dedicated to nurturing the talents
            of both boys and girls through top-tier training programs. Led by a seasoned coach with
            over 25 years of international youth development experience, we provide a supportive and
            dynamic environment that fosters growth, teamwork, and a lifelong passion for the
            beautiful game. Join us and watch your child thrive both on and off the field!
          </p>
          <a href="#register" className="btn btn-primary">
            Register
          </a>
          <a href="#program" className="btn">
            Learn More
          </a>
        </div>
      </section>
      <section id="program" className="">
        <h2>Our Program Offers:</h2>
        <ul>
          <li>
            <FaCheckCircle color="green" size={24} style={{ minWidth: "24" }} />
            <h3>Soccer Fundamentals and Skills</h3>
          </li>
          <li>
            <FaCheckCircle color="green" size={24} style={{ minWidth: "24" }} />
            <h3>Teamwork and Sportsmanship</h3>
          </li>
          <li>
            <FaCheckCircle color="green" size={24} style={{ minWidth: "24" }} />
            <h3>Youth Development Experienced Coaches</h3>
          </li>
          <li>
            <FaCheckCircle color="green" size={24} style={{ minWidth: "24" }} />
            <h3>Fun and Engaging Evironment</h3>
          </li>
          <li>
            <FaCheckCircle color="green" size={24} style={{ minWidth: "24" }} />
            <h3>2 sessions per week</h3>
          </li>
        </ul>
      </section>
      <section id="register">
        <h2>Registerations:</h2>
        <h3 className="coupon">USE CODE &quot;earlybird50&quot; FOR $50 OFF!</h3>

        <div className="programs-container">
          {programs.map((program) => (
            <div key={program._id} className="program">
              <h2>{program.title}</h2>
              <ul>
                <li>{program.time}</li>
                <li>
                  {program.start_date} - {program.end_date}
                </li>
              </ul>
              <Link
                href={
                  process.env.NODE_ENV === "development"
                    ? program.test_payment_link
                    : program.payment_link
                }
                className="btn btn-primary">
                Register
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section id="location">
        <h2>Location:</h2>
        <div className="location-container">
          <p>
            All practices will be held at <strong style={{fontSize:"1.2rem"}}>St. Mary School.</strong>
          </p>

          <strong>5536 Bank St, Gloucester, ON K1X 1G9</strong>
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
      </section>
      <section id="coach">
        <h2>Meet the Head Coach!</h2>
        <div className="coach-img-wrapper">
          <img src={"/coach.jpeg"} alt="coach rafed with seth platter" className="coach-rafed" />
          <span>*Coach Rafid with Sepp Blatter, Riyadh SA.</span>
        </div>
        <p>
          Coach Rafed Alwani is a Soccer Academies Consultant and a Canada Soccer certified coach
          with over 25 years of experience in youth soccer coaching and development. He began his
          coaching career with A.C. Fiorentina Canada, where he coached for seven years. In 2008, he
          moved to Saudi Arabia, where he coached Al-Nasser Club Youth for four years, established
          one of the country’s largest academies, acted as a consultant for several soccer
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
