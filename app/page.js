import Program from "@/models/program";
import connectToDB from "@/utils/database";
import { revalidatePath } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

const getPrograms = async () => {
  await connectToDB();
  const programs = await Program.find();
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
          />
        </div>
        <div className="btn-group">
          <Link href={"/register"} className="btn btn-primary">
            Register
          </Link>
          <a href="#highlights" className="btn">
            Learn More
          </a>
        </div>
      </section>
      <section id="highlights">
        <h2>What our program offers</h2>
        <ul>
          <li>
            <FaCheckCircle color="green" size={24} />
            <h3>Skill Development</h3>
          </li>
          <li>
            <FaCheckCircle color="green" size={24} />
            <h3>Teamwork and Sportsmanship</h3>
          </li>
          <li>
            <FaCheckCircle color="green" size={24} />
            <h3>Physical Fitness</h3>
          </li>
          <li>
            <FaCheckCircle color="green" size={24} />
            <h3>Professional Coaching</h3>
          </li>
          <li>
            <FaCheckCircle color="green" size={24} />
            <h3>Fun and Engaging Environment</h3>
          </li>
        </ul>
      </section>
      <section id="register">
        <h2>Register Now</h2>
        <p>As Low as $15 per session</p>
        <div className="programs-container">
          {programs.map((program) => (
            <div key={program._id} className="program">
              <h2>{program.title}</h2>
              <h3>${program.price}</h3>
              <ul>
                <li>Number of sessions: {program.sessions}</li>
                <li>sessions are {program.sessions_length}min each</li>
                <li>{program.time}</li>
                <li>
                  {program.start_date} - {program.end_date}
                </li>
                <li>location: {program.location}</li>
              </ul>
              <Link href={program.payment_link} className="btn btn-primary">
                Register
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section id="coaches">
        <h2>Meet the Coach!</h2>
      </section>
    </>
  );
}
