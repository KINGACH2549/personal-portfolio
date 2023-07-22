import { useState } from "react";
import HeroPage from "./Pages/HeroPage";
import NavPage from "./Pages/NavbarPage";
import "./index.css";
import AboutPage from "./Pages/AboutPage";
import ProjectPage from "./Pages/ProjectPage";
import FooterPage from "./Pages/FooterPage";

function App() {
  //background color change from top  most parent element
  const [backgroundColor, setBackgroundcolor] = useState(false);
  const handleBackgroundColor = () => {
    if (!backgroundColor) {
      document.body.style.backgroundColor = "hsl(210deg, 30%, 8%)";
    } else {
      document.body.style.backgroundColor = "#fff";
    }
    setBackgroundcolor(!backgroundColor);
  };
  return (
    <div className="container">
      <NavPage
        backgroundColor={backgroundColor}
        handleBackgroundColor={handleBackgroundColor}
      />
      <HeroPage backgroundColor={backgroundColor} />
      <AboutPage backgroundColor={backgroundColor} />
      <ProjectPage backgroundColor={backgroundColor} />
      <FooterPage backgroundColor={backgroundColor} />
    </div>
  );
}

export default App;
