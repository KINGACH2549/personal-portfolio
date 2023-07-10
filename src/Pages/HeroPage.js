import Hero from "../Components/Hero/Hero";

function HeroPage({ backgroundColor }) {
  return (
    <>{backgroundColor ? <Hero color="white" /> : <Hero color="#222" />}</>
  );
}

export default HeroPage;
