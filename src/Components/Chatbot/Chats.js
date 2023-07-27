function Chats({ chat, isBot }) {
  return (
    <div className="bot-reply-container">
      <p className="bot-reply">
        {!chat
          ? "Hi , I am Achintya's Personal Assistant Bot ,I am currently under  development and would be more than happy to help you in future. Below are Achintya's diffrent profile handles you can reach out to him via them."
          : chat}
      </p>
      <br></br>
      {isBot && <p className="bot-endtag">SEE YOU AGAIN!</p>}
    </div>
  );
}

export default Chats;
