import { SiLinkedin } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
function Chats({ chat, isBot }) {
  return (
    <>
      <div className="bot-reply-container">
        <p className="bot-reply">
          {!chat
            ? "Hi , I am Achintya's Personal Assistant Bot ,I am currently under  development and would be more than happy to help you in future. Below are Achintya's diffrent profile handles you can reach out to him via them."
            : chat}
        </p>
        <br></br>
        {isBot && <p className="bot-endtag">SEE YOU AGAIN!</p>}
      </div>
      {isBot && (
        <div className="profile-handles">
          <a href="https://www.linkedin.com/in/achintya-mishra-760604155">
            <SiLinkedin className="profile-links" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=7208648476&text=Hello%20there!">
            <IoLogoWhatsapp className="profile-links" />
          </a>
          <a href="mailto:sciencerage802@gmail.com">
            <BiLogoGmail className="profile-links" />
          </a>
        </div>
      )}
    </>
  );
}

export default Chats;
