import { Player } from "@lottiefiles/react-lottie-player";

function Hero() {
  return (
    <Player
      //   src="https://assets5.lottiefiles.com/packages/lf20_x62chJ.json"
      src="https://assets8.lottiefiles.com/packages/lf20_gljfnvqz.json"
      //   src="https://assets10.lottiefiles.com/packages/lf20_wtpprtnc.json"
      loop
      autoplay
      style={{ height: "600px", width: "600px", borderRadius: "50%" }}
      background="rgb(43, 119, 191)"
    />
  );
}
export default Hero;
