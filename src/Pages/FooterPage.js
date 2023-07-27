import FooterComp from "../Components/Footer/footer";

function FooterPage({ backgroundColor, handleChat, chatStatus }) {
  return (
    <>
      {backgroundColor ? (
        <FooterComp
          handleChat={handleChat}
          chatStatus={chatStatus}
          color="white"
          background="linear-gradient(hsl(210deg, 30%, 8%),hsl(210deg, 30%, 8%),hsl(210deg, 30%, 8%),hsl(210deg, 30%, 8%),rgb(43, 119, 191))"
        />
      ) : (
        <FooterComp
          handleChat={handleChat}
          chatStatus={chatStatus}
          color="#222"
          background="linear-gradient(white,white,white,white,rgb(43, 119, 191))"
        />
      )}
    </>
  );
}

export default FooterPage;
