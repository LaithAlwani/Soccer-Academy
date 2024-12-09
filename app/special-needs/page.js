import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import { FaCheck, FaChevronRight } from "react-icons/fa6";
export default function SpecialNeedsPage() {

  return (
    <>
      <Hero image="/hero-m.webp" alt="kids playing soccer" title="Inclusive Soccer Program" />
      <section>
        <div className="btn-group">
          <h2>Empowering Every Child to Play, Connect, and Thrive</h2>
          <p>
            A soccer program designed to support children and teens with diverse needs—because every
            child deserves the chance to shine in a safe, inclusive environment.
          </p>
          <a href="#about" className="btn">
            Learn More
          </a>
          <a href="#waiting-list" className="btn  btn-primary">
            Waiting List
          </a>
        </div>
      </section>
      <section id="about">
        <h2>About The Program</h2>
        <p>
          Does your child or teenager love soccer but face challenges that make joining a regular
          program difficult? Ottawa Stars Soccer Academy is excited to introduce a new, inclusive
          program crafted for children and teens who may experience social anxiety, ADHD,
          depression, low self-esteem, Autism, and more.
        </p>
        <p>
          Our goal is to create a fun, supportive environment where young athletes can learn, grow,
          and connect with others. With a structured yet flexible approach, we tailor training to
          meet each participant&apos;s needs, helping them build skills and confidence on and off
          the field.
        </p>
        <ul>
          <li>
            <FaCheck className="check-mark" />
            <p>
              <strong>Skill Development:</strong> Learn soccer fundamentals in an adaptable way.
            </p>
          </li>
          <li>
            {" "}
            <FaCheck className="check-mark" />
            <p>
              <strong>Social Interaction:</strong> Opportunities for teamwork and friendship.
            </p>
          </li>
          <li>
            {" "}
            <FaCheck className="check-mark" />
            <p>
              <strong>Confidence Building:</strong> Activities focused on personal growth and
              self-esteem.
            </p>
          </li>
          <li>
            <FaCheck className="check-mark" />
            <span>
              <strong>Supportive Environment:</strong> Coaches with specialized training provide
              guidance suited to each child&apos;s needs.
            </span>
          </li>
        </ul>
      </section>
      <section>
        <h2>Who Can Join?</h2>
        <p>
          Our inclusive soccer program is open to children and teens facing a variety of challenges.
          We offer a supportive space tailored for those who may struggle in traditional sports
          programs. Our coaches and staff understand the unique needs of children with:
        </p>
      </section>
      <section className="divided-container">
        <div className="container">
          <div>
            <h3>Social Anxiety</h3>
          </div>
          <div>
            <h3>ADHD</h3>
          </div>
          <div>
            <h3>Autism</h3>
          </div>
          <div>
            <h3>Depression </h3>
          </div>
          <div>
            <h3>Low Self-Esteem</h3>
          </div>
        </div>
      </section>

      <section>
        <h2>Our Approach to Supportive Coaching</h2>
        Our coaches and support staff have extensive experience in Applied Behavior Analysis (ABA)
        and other intervention techniques. They understand the unique needs of each child and apply
        a personalized approach to ensure that every participant feels comfortable, supported, and
        encouraged. Key elements of our approach include:
        <ul>
          <li>
            <FaCheck className="check-mark" />
            <p>
              <strong>Structured Routines:</strong> We provide consistent routines that help
              participants feel secure and engaged.
            </p>
          </li>
          <li>
            <FaCheck className="check-mark" />
            <p>
              <strong>Positive Reinforcement:</strong> Each child receives positive feedback and
              encouragement to build confidence.
            </p>
          </li>
          <li>
            <FaCheck className="check-mark" />
            <p>
              <strong>Social Skills Development:</strong> Group activities are designed to foster
              cooperation, communication, and friendship.
            </p>
          </li>
          <li>
            <FaCheck className="check-mark" />
            <p>
              <strong>Individualized Support:</strong> Our coaches adapt techniques to meet each
              child&apos;s learning style and abilities.
            </p>
          </li>
        </ul>
      </section>
      <section>
        <h2>Creating a Safe, Inclusive, and Enjoyable Environment</h2>
        <p>
          At Ottawa Stars Soccer Academy, we prioritize safety, inclusivity, and enjoyment. We
          maintain a low player-to-coach ratio (6:1) to provide individual attention and make sure
          that every child is supported. Before registration, we conduct a one-on-one assessment to
          understand each child&apos;s needs, ensuring they&apos;re placed in a group that best
          supports their growth.
        </p>
        <ul>
          <li>
            <FaCheck className="check-mark" />
            <p>
              <strong>Player-to-Coach Ratio: </strong> 6:1 for personalized support.
            </p>
          </li>
          <li>
            <FaCheck className="check-mark" />
            <p>
              <strong>Pre-Registration Assessment:</strong> Tailoring our approach to each child.
            </p>
          </li>
          <li>
            <FaCheck className="check-mark" />
            <p>
              <strong>Encouraging Environment:</strong> A place where every child can feel
              comfortable and thrive.
            </p>
          </li>
        </ul>
      </section>

      <h2>Pricing</h2>

      <section id="register" className="divided-container red-linear-bg">
        <div className="container">
          <div>
            <h3>1 Session per week</h3>
            <span className="small">Fri. 6:30-7:30 PM</span>
            <h4>$399</h4>

            <span className="small">*12 sessions</span>
          </div>
        </div>
        <p className="small">
          *$20 one time enrollment fee wich covers admin and fees and trainig shirt
        </p>
        <p className="small">
          *Prices are per season and include personalized coaching, and ongoing support.
        </p>
      </section>

      <section id="sponsors">
        <h2>Join the Waiting List, Here&apos;s How to Get Started</h2>
        <p>
          We&apos;re excited to welcome your child to our inclusive soccer community! To get
          started:
        </p>
        <ul>
          <li>
            <FaChevronRight className="check-mark" />
            <p>Join the waiting list by filling out the form below.</p>
          </li>
          <li>
            <FaChevronRight className="check-mark" />
            <p>
              Our team will be in touch within the next couple of weeks to arrange your initial
              assessment.
            </p>
          </li>
          <li>
            <FaChevronRight className="check-mark" />
            <p>
              Once the assessment is completed, finalize the registration by filling out the online
              form to secure your child&apos;s place in the program.
            </p>
          </li>
          <li>
            <FaChevronRight className="check-mark" />
            <p>
              Become part of the Team: After registration, your child will be placed in a group
              tailored to their age and needs, ensuring a positive and rewarding experience.
            </p>
          </li>
        </ul>
      </section>
      <section id="contact" className="red-linear-bg">
        <ContactForm waitingList={true} />
      </section>
    </>
  );
}
