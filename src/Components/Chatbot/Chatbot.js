import { useEffect, useRef, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import "./Chatbot.css";

import Chats from "./Chats";
function Chatbot({ handleChat, chatStatus }) {
  const [chats, setChats] = useState([{ text: null, isBot: true }]);
  const [message, setMessage] = useState("");
  const [isLoading, setLoading] = useState(false);
  const chatRef = useRef(null);

  useEffect(() => {
    if (chats.length > 1 && message === "") {
      setTimeout(() => {
        setLoading(false);

        setChats([...chats, { message: null, isBot: true }]);
      }, 5000);
    }
    // eslint-disable-next-line
  }, [message]);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [chats]);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };
  const handleClick = () => {
    if (chatStatus) {
      handleChat(false);
      setChats([{ text: null, isBot: true }]);
    } else {
      handleChat(true);
    }
  };
  const handleButtonClick = (e) => {
    e.preventDefault();
    if (message.length > 0) {
      console.log(typeof chats);
      setChats([...chats, { text: message, isBot: false }]);
      setLoading(true);
    }
    setMessage("");
  };
  //only for v1.0.0
  const renderedChats = chats.map((chat) => {
    return <Chats chat={chat.text} isBot={chat.isBot} />;
  });
  return (
    <>
      {chatStatus && (
        <div className="chatbot-container">
          <div className="chat-area">
            <div className="chatbot-header">
              <p onClick={handleClick}>X</p>
            </div>

            <div className="allchats" ref={chatRef}>
              {renderedChats}

              {isLoading && (
                <Player
                  src="https://lottie.host/978ea30f-f3eb-45e4-b360-79b684425d22/C57q7pyUAv.json"
                  loop
                  autoplay
                  style={{
                    height: "100px",
                    width: "200px",
                  }}
                />
              )}
            </div>
            <section className="chat-inputbox">
              <textarea
                value={message}
                onChange={handleInputChange}
                placeholder="Enter your Message..."
                width="100%"
              ></textarea>
              <a href="/" onClick={handleButtonClick}>
                Send
              </a>
            </section>
          </div>
        </div>
      )}
    </>
  );
}
export default Chatbot;
