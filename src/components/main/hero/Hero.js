import HeroDesktop from "./HeroDesktop";
import HeroMobile from "./HeroMobile";

const Hero = () => {
  return (
    <section className="hero">
      <HeroDesktop />
      <HeroMobile />
    </section>
  );
};

export default Hero;
