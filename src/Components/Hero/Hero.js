import { Player } from "@lottiefiles/react-lottie-player";
import "./Hero.css";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";

function Hero({ color, hover }) {
  return (
    <div id="hero-section" className={`hero-container ${hover}`}>
      <Player
        src="https://assets8.lottiefiles.com/packages/lf20_gljfnvqz.json"
        // className=".lottie"
        loop
        autoplay
        background="rgb(43, 119, 191)"
        style={{ borderRadius: "50%" }}
        className="lottie"
      />

      <div className="intro-container" style={{ color }}>
        <p className="intro-hello"> Hello I am</p>
        <p className="intro-name">
          Achintya <br></br>Mishra
        </p>
        <p>Software Developer</p>
      </div>
      <div className="social-icons-hero">
        <a
          href="https://github.com/KINGACH2549"
          target="_blank"
          rel="noreferrer"
          className="social-icon-link"
        >
          <SiGithub className="social-icon" style={{ color }} />
        </a>

        <a
          href="https://www.linkedin.com/in/achintya-mishra-760604155"
          target="_blank"
          rel="noreferrer"
          className="social-icon-link"
        >
          <SiLinkedin className="social-icon" style={{ color }} />
        </a>
        <a
          href="https://github.com/KINGACH2549"
          target="_blank"
          rel="noreferrer"
          className="social-icon-link"
        >
          <SiInstagram className="social-icon" style={{ color }} />
        </a>
      </div>
    </div>
  );
}
export default Hero;
