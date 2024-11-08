import Hero from "@/components/Hero";
import Image from "next/image";
import { GoGoal } from "react-icons/go";
import { FaEye } from "react-icons/fa";

export default function page() {
  return (
    <>
      <Hero image="/hero-m.webp" title="About Us" />
      <section className="divided-container red-linear-bg">
        <div className="container">
          <div>
            <GoGoal size={48} />
            <h2>Mission</h2>
            <p>
              Ottawa Stars Soccer Academy is dedicated to empowering youth through soccer, fostering
              personal growth, teamwork, and a passion for the game in an inclusive and supportive
              environment.
            </p>
          </div>
          <div>
            <FaEye size={48} />
            <h2>Vision</h2>
            <p>
              Our vision is to inspire and nurture the next generation of athletes, creating a
              community where every child has the opportunity to thrive and achieve their fullest
              potential in soccer.
            </p>
          </div>
        </div>
      </section>
      <section id="coach">
        <div className="coach-img-wrapper">
          <Image
            src={"/coach.webp"}
            alt="coach rafed holding soccer ball with former FIFA president sepp Blatter"
            className="coach-rafed"
            fill
          />
          <span>*Coach Rafid with former FIFA president Sepp Blatter, Riyadh SA.</span>
        </div>
        <h2>Meet the Head Coach!</h2>
        <p>
          Coach Rafed Alwani is a Soccer Academies Consultant and a Canada Soccer certified coach
          with over 25 years of experience in youth soccer coaching and development. He began his
          coaching career with A.C. Fiorentina Canada, where he coached for seven years. In 2008, he
          moved to Saudi Arabia, where he coached Al-Nasser Club Youth for four years, established
          one of the country&apos;s largest academies, and acted as a consultant for several soccer
          academies. Now back in Canada, Ottawa Stars Soccer Academy is his latest creation where
          players can have fun, develop, and achieve results.
        </p>
      </section>
      <section id="locations">
        <h2>Locations:</h2>
        <div className="location-container">
          <div className="location-info">
            <h3>St. Patrick School.</h3>

            <strong>68 Larkin Dr, Nepean, ON K2J 1A9</strong>
          </div>
          <div className="map">
            <Image src="/location.webp" alt="practice location" fill />
          </div>
        </div>
        <div className="location-container">
          <div className="location-info">
            <h3>
              St. Mary School <span className="small">(opens January 2025)</span>
            </h3>

            <strong> 5536 Bank St, Gloucester, ON K1X 1G9</strong>
          </div>
          <div className="map">
            <Image src="/location_02.webp" alt="practice location" fill />
          </div>
        </div>
        <p>
          Weekdays between <strong>6:30-8:30PM</strong>
        </p>
        <p className="small">
          *please check{" "}
          <strong>
            <em>
              <a href="#register" aria-label="register section">
                Registeration
              </a>
            </em>
          </strong>{" "}
          section for more information on time and date.
        </p>
      </section>
    </>
  );
}
