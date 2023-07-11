import "./Navbar.css";

function Navbar({
  navLinks,
  changeBackgroundColor,
  color,
  themeIcon,
  backgroundColor,
  logo,
}) {
  const renderLinks = navLinks.map((links) => {
    return (
      <li class="nav-links-list">
        <button className="nav-links" style={{ color, backgroundColor }}>
          {links}
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
