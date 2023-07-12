import "./About.css";

function About({ skills, className }) {
  const renderedButtons = skills.map((skill) => {
    return <button className={className}>{skill}</button>;
  });
  return (
    <div className="about-container">
      <p className="about-content-container">
        <span className="about-content">
          "I'm , a recent undergraduate who's genuinely passionate about
          building systems at scale. I have a deep love for technology and its
          potential to transform lives. My academic journey has been great, and
          I have achieved a CGPA of 8.97 during my undergrad. During my time as
          a backend development intern
        </span>

        <span className="about-content">
          {" "}
          I had the opportunity to learn from experienced professionals and
          contribute to meaningful projects. I truly believe that my
          capabilities enable me to contribute to the development of large-scale
          systems. I'm excited about the future and the potential to make a
          positive impact with my work"
        </span>
      </p>
      <div className="skills-experience-container">
        <div className="skills-grid">
          <p>skills</p>
          {renderedButtons}
        </div>
        <div>
          <p>Experience</p>
        </div>
      </div>
    </div>
  );
}
export default About;
