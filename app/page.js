import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <section id="hero">
        <div className="hero-img-wrapper">
          <Image
            src="https://t3.ftcdn.net/jpg/02/06/97/12/360_F_206971263_PGblLDBkfmhCNSHC6zoCOQEf2BwSsFb7.jpg"
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
      </section>
      <section id="coaches">
        <h2>Meet the Coach!</h2>
      </section>
    </>
  );
}
