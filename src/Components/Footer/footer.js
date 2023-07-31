import "./footer.css";

import { AiOutlineMail } from "react-icons/ai";
function FooterComp({ color, background, handleChat, chatStatus }) {
  const onSubmit = (e) => {
    e.preventDefault();

    handleChat(true);
  };
  return (
    <footer id="footer-section" className="footer" style={{ background }}>
      <div className="footer-message">
        <h3 style={{ color }}>Want to get in Touch ?</h3>
        <a href="/" onClick={onSubmit}>
          Message Now
        </a>
      </div>
      <div className="copyright-footer" style={{ color }}>
        <span>&copy; 2023 Achintya Mishra. All rights reserved.</span>
        <span>This website does not use cookies.</span>
        <span>For more information please contact.</span>

        <AiOutlineMail />
        <a href="mailto:sciencerage802@gmail.com" style={{ color }}>
          sciencerage802@gmail.com
        </a>
      </div>
    </footer>
  );
}

export default FooterComp;
