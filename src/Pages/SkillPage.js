import Skills from "../Components/Skills/Skills";
import "../Components/Skills/Skills.css";
function SkillPage({ backgroundColor }) {
  return (
    <div className="skills-container">
      <header className="my-skill-text">Skills</header>

      {backgroundColor ? (
        <Skills className="swiper-skills-dark" />
      ) : (
        <Skills className="swiper-skills" />
      )}
    </div>
  );
}

export default SkillPage;
