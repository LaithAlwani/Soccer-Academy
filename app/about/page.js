export default function page() {
  return (
    <>
      <section>
        <h1>About Ottawa Stars</h1>
        <p>
          Welcome to Ottawa Stars Soccer Academy! We are excited to be a part of your child’s soccer
          journey, where they can learn, grow, and thrive in a supportive environment.
        </p>
        <h3>Mission</h3>
        <p>
          At Ottawa Stars Soccer Academy, our mission is to empower young athletes through
          high-quality soccer training, fostering skills, teamwork, and a lifelong love for the game
          in a positive environment.
        </p>
        <h3>Vision Statement </h3>
        <p>
          We envision a community where every child has the opportunity to develop their soccer
          potential, become confident individuals, and embrace the values of discipline and
          sportsmanship.
        </p>
      </section>
      <section id="coach">
        <h2>Meet the Head Coach!</h2>
        <div className="coach-img-wrapper">
          <img
            src={"/coach.jpeg"}
            alt="coach rafed holding soccer ball with former FIFA president sepp Blatter"
            className="coach-rafed"
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
    </>
  );
}
