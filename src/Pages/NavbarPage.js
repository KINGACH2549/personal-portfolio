import { MdOutlineNightlight, MdLightMode } from "react-icons/md";
import Navbar from "../Components/Navbar/Navbar";

function NavPage({ backgroundColor, handleBackgroundColor }) {
  const navLinks = [
    { section: "Home", ref: "hero-section" },
    { section: "About", ref: "about-section" },
    { section: "Posts", ref: null },
    { section: "Contact", ref: "footer-section" },
  ];
  return (
    <>
      {backgroundColor ? (
        <Navbar
          navLinks={navLinks}
          changeBackgroundColor={handleBackgroundColor}
          color="#999"
          themeIcon={
            <MdOutlineNightlight
              className="custom-icon"
              style={{
                color: "#999",
              }}
            />
          }
          backgroundColor="hsl(210deg, 30%, 8%)"
          hover="navbar-list-dark"
        />
      ) : (
        <Navbar
          navLinks={navLinks}
          changeBackgroundColor={handleBackgroundColor}
          color="#666"
          themeIcon={
            <MdLightMode
              className="bright-icon"
              style={{
                color: "#444",
              }}
            />
          }
          hover="navbar-list-bright"
        />
      )}
    </>
  );
}

export default NavPage;
