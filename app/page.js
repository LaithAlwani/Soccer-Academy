import ContactForm from "@/components/ContactForm";
import Program from "@/models/program";
import connectToDB from "@/utils/database";
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
        image="/hero_m.jpg"
        altImage="/hero_01.jpg"
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
      <section id="register" className="divided-container ">
        <div className="container">
          <div>
            <h3>Mini Stars</h3>
            <h4>$200</h4>
            <span className="small">down from</span>
            <h5>$250</h5>
            <span className="">practice once a week</span>
            <span className="small">*Ages 5-6</span>
          </div>
          <div>
            <h3>Junior Stars</h3>
            <h4>$375</h4>
            <span className="small">down from</span>
            <h5>$450</h5>
            <span className="small">practice twice a week</span>
            <span className="small">*Ages 7-8</span>
          </div>
          <div>
            <h3>Rising Stars</h3>
            <h4>$375</h4>
            <span className="small">down from</span>
            <h5>$450</h5>
            <span className="">practice twice a week</span>
            <span className="small">*Ages 9 -11</span>
          </div>
        </div>
        <p className="small">
          * plus $20 one time enrollment fee, includes admin fees and training shirt.
        </p>
        <p className="small">
          *Prices are per season and include personalized coaching, and ongoing support.
        </p>
      </section>
      <section id="sponsors" className="school-intro">
        <h2>We are looking for sponsors</h2>
        <p>
          <strong>Ottawa Stars Soccer Academy </strong>is seeking sponsors! Packages start at
          <strong> $100/year</strong> and include amazing exposure opportunities, like having your logo on our
          website, advertisements, training shirts, and game shirts, plus mentions in our social
          media posts. The more you invest, the greater your brand&apos;s visibility across our
          platforms and events. Partner with us to make a meaningful impact and boost your brand!
        </p>
      </section>
      <ContactForm />
    </>
  );
}
