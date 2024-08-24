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
        <p>As Low as $15 per session</p>
        <div className="programs-container">
          <div className="program">
            <p>32 Sessions</p>
            <h3>$430 Early bird</h3>
            <p>regular price 480 </p>
            <ul>
              <li>2 sessions per week</li>
              <li>1 Hour sessions</li>
              <li>between 6-8PM</li>
              <li>Sept. 30th - Jan. 31st</li>
              <li>LongField HS (Barrhaven)</li>
            </ul>
            <Link href="/register" className="btn btn-primary">
              Register
            </Link>
          </div>
          <div className="program">
            <p>64 Sessions</p>
            <h3>$800 Early bird</h3>
            <p>regular price 865 </p>
            <ul>
              <li>2 sessions per week</li>
              <li>1 Hour sessions</li>
              <li>between 6-8PM</li>
              <li>Sept. 30th - May. 31st</li>
              <li>LongField HS (Barrhaven)</li>
            </ul>
            <Link href="/register" className="btn btn-primary">
              Register
            </Link>
            <p>10% discount</p>
          </div>
          <div className="program red">
            <p>Special Needs program</p>
            <p>1 session</p>
            <h3>starting $75</h3>
            <p>regular price $85</p>
            <ul>
              <li>Certified Behavoral Therapiest</li>
              <li>30 - 60 min</li>
              <li>between 6-8PM</li>
              <li>LongField HS (Barrhaven)</li>
            </ul>
            <Link href="/register" className="btn btn-secondary">
              Register
            </Link>
          </div>
          <div className="program red">
            <p>Special Needs program </p>
            <p>6 sessions </p>
            <h3>starting $400</h3>
            <p>regular price $450</p>
            <ul>
              <li>Certified Behavoral Therapiest</li>
              <li>1 session per week</li>
              <li>30 - 60 min</li>
              <li>between 6-8PM</li>
              <li>LongField HS (Barrhaven)</li>
            </ul>
            <Link href="/register" className="btn btn-secondary">
              Register
            </Link>
            <p>12% discount</p>
          </div>
        </div>
      </section>
      <section id="coaches">
        <h2>Meet the Coach!</h2>
      </section>
    </>
  );
}
