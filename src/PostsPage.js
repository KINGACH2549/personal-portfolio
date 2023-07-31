import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";

function PostPage() {
  return (
    <div className="posts-container">
      <Player
        src="https://lottie.host/62381c7a-83a8-4402-9e4b-c0e76c6bb93d/OmhcArVczp.json"
        loop
        autoplay
        style={{ width: "500px" }}
      />

      <Link to="/" className="back-button">
        Go Back
      </Link>
    </div>
  );
}

export default PostPage;
