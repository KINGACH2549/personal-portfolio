import { useState } from "react";
import Navbar from "./Navbar/Navbar";
import "./index.css";
import { MdOutlineNightlight, MdLightMode } from "react-icons/md";
import logo_bright from "./imgs/A.png";
import logo_dark from "./imgs/A2.png";
import Hero from "./Hero/Hero";
function App() {
  const navLinks = ["Home", "About", "Posts", "Contact"];
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
      {backgroundColor ? (
        <Navbar
          navLinks={navLinks}
          changeBackgroundColor={handleBackgroundColor}
          color="white"
          themeIcon={
            <MdOutlineNightlight
              className="custom-icon"
              style={{
                width: "60px",
                height: "30px",
                color: "white",
              }}
            />
          }
          backgroundColor="hsl(210deg, 30%, 8%)"
          logo={logo_dark}
        />
      ) : (
        <Navbar
          navLinks={navLinks}
          changeBackgroundColor={handleBackgroundColor}
          color="#222"
          themeIcon={
            <MdLightMode
              className="bright-icon"
              style={{ width: "60px", height: "30px" }}
            />
          }
          logo={logo_bright}
        />
      )}
      <Hero />
    </div>
  );
}

export default App;
