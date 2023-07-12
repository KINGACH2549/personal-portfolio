import About from "../Components/About/About";

function AboutPage({ backgroundColor }) {
  const skills = [
    "React js",
    "Node js",
    "HTML",
    "CSS",
    "Redux",
    "C++",
    "Java",
    "MYSQL",
    "MongoDB",
    "Postman",
    "WebSockets",
  ];
  return (
    <>
      {backgroundColor ? (
        <About className="skill-dark" skills={skills} />
      ) : (
        <About className="skills" skills={skills} />
      )}
    </>
  );
}

export default AboutPage;
