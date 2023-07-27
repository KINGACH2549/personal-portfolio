import { useState } from "react";
import HeroPage from "./Pages/HeroPage";
import NavPage from "./Pages/NavbarPage";
import "./index.css";
import AboutPage from "./Pages/AboutPage";
import ProjectPage from "./Pages/ProjectPage";
import FooterPage from "./Pages/FooterPage";

import SkillPage from "./Pages/SkillPage";
import Chatbot from "./Components/Chatbot/Chatbot";

function App() {
  const [backgroundColor, setBackgroundcolor] = useState(false);
  const [chatStatus, setChatStatus] = useState(false);
  const handleChat = (status) => {
    setChatStatus(status);
  };
  const handleBackgroundColor = () => {
    if (!backgroundColor) {
      document.body.style.backgroundColor = "hsl(210deg, 30%, 8%)";
    } else {
      document.body.style.backgroundColor = "#fff";
    }
    setBackgroundcolor(!backgroundColor);
  };
  return (
    <>
      <div className="container">
        <NavPage
          backgroundColor={backgroundColor}
          handleBackgroundColor={handleBackgroundColor}
        />
        <HeroPage backgroundColor={backgroundColor} />
        <AboutPage backgroundColor={backgroundColor} />
        <ProjectPage backgroundColor={backgroundColor} />

        <SkillPage backgroundColor={backgroundColor} />
        <FooterPage
          handleChat={handleChat}
          chatStatus={chatStatus}
          backgroundColor={backgroundColor}
        />
        <Chatbot handleChat={handleChat} chatStatus={chatStatus} />
      </div>
    </>
  );
}

export default App;
