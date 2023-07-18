import "./About.css";
import { Player } from "@lottiefiles/react-lottie-player";
import { BsArrowUpRight } from "react-icons/bs";

function About({ skills, className, expereinces, color }) {
  const experienceCards = expereinces.map((experience) => {
    return (
      <div className="expereince-card" style={{ color }}>
        <header className="exp-date" style={{ color }}>
          {experience.fromdate}-{experience.todate}
        </header>
        <div className="exp-header">
          <h3 className="exp-des">{experience.designation}</h3>
          <h4 className="exp-company">{experience.company}</h4>
        </div>
        <BsArrowUpRight
          className="exp-arrow"
          style={{
            position: "absolute",
            height: "50px",
            width: "30px",
            top: "10px",
            right: "20px",
          }}
        />
        <div className="exp-desc">{experience.Description}</div>
        <ul className="exp-tech">
          {experience.TechStack.map((skill) => {
            return <li>{skill}</li>;
          })}
        </ul>
      </div>
    );
  });
  return (
    <div className="about-container">
      <p className="about-content-container">
        <span className="about-content">
          I'm , a recent undergraduate who's genuinely passionate about building
          systems at scale. I have a deep love for technology and its potential
          to transform lives. My academic journey has been great, and I have
          achieved a CGPA of 8.97 during my undergrad. During my time as a
          backend development intern
        </span>

        <span className="about-content">
          {" "}
          I had the opportunity to learn from experienced professionals and
          contribute to meaningful projects. I truly believe that my
          capabilities enable me to contribute to the development of large-scale
          systems. I'm excited about the future and the potential to make a
          positive impact with my work
        </span>
      </p>
      <div className="skills-experience-container">
        {/* <div className="skills-grid">
          <p>skills</p>
          {renderedButtons}
        </div> */}
        <Player
          src="https://lottie.host/ee2c3280-5981-4340-a7a5-4bccc878c821/DlivVtso87.json"
          loop
          autoplay
          style={{
            height: "400px",
            width: "400px",
            // borderRadius: "50%",
            // backgroundColor: "white",
          }}
        />
        <div className="experience-section">
          <p>Experience</p>
          <div className="overflow-exp"> {experienceCards}</div>
        </div>
      </div>
    </div>
  );
}
export default About;
