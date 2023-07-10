import { MdOutlineNightlight, MdLightMode } from "react-icons/md";
import Navbar from "../Components/Navbar/Navbar";

function NavPage({ backgroundColor, handleBackgroundColor }) {
  const navLinks = ["Home", "About", "Posts", "Contact"];

  return (
    <>
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
        />
      )}
    </>
  );
}

export default NavPage;
