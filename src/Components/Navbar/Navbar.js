import "./Navbar.css";

function Navbar({
  navLinks,
  changeBackgroundColor,
  color,
  themeIcon,
  backgroundColor,
  logo,
}) {
  const scrolltoSection = (ref) => {
    const section = document.getElementById(ref);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const renderLinks = navLinks.map((links) => {
    return (
      <li className="nav-links-list">
        <button
          onClick={() => scrolltoSection(links.ref)}
          className="nav-links"
          style={{ color, backgroundColor }}
        >
          {links.section}
        </button>
      </li>
    );
  });
  return (
    <div className="nav-container" style={{ backgroundColor }}>
      <nav className="navbar">
        <p className="logo-container">
          <a
            href="https://www.linkedin.com/in/achintya-mishra-760604155"
            rel="noreferrer"
            target="_blank"
            className="logo-tail logo-tail-render"
          >
            Achintya
          </a>
        </p>
        <ul className="navbar-list">{renderLinks}</ul>
        <ul className="navbar-list icon-list">
          <li onClick={() => changeBackgroundColor()} className="nav-icon">
            {themeIcon}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
