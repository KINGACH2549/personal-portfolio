import About from "../Components/About/About";

function AboutPage({ backgroundColor }) {
  const expereinces = [
    {
      fromdate: "2023 Jan",
      todate: "2023 May",
      Description:
        "  Created analytics platform to collect users interaction data on any website and also developed client-side plugin for it using client-side Java-Script. Integrated Razorpay Payment Gateway for their clients using RazorPay API’s and Webhooks. Also developed complete backend of companies in house product called bio-1 which let users to create their own portfolio websites with proper no code solution. ",
      TechStack: ["Node js", "Express js", "MySQL"],
      company: "codes 'n' coffee Tech",
      designation: "Backend Development Intern",
    },
  ];
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
        <About
          className="skill-dark"
          skills={skills}
          expereinces={expereinces}
          color="#999"
        />
      ) : (
        <About
          className="skills"
          skills={skills}
          expereinces={expereinces}
          color="#444"
        />
      )}
    </>
  );
}

export default AboutPage;
