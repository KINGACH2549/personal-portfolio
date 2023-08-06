import Hero from "../Components/Hero/Hero";

function HeroPage({ backgroundColor }) {
  return (
    <>
      {backgroundColor ? (
        <Hero color="#999" hover="hero-container-dark" />
      ) : (
        <Hero color="#444" hover="hero-container-light" />
      )}
    </>
  );
}

export default HeroPage;
