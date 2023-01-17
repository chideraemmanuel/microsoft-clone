import Branches from "./Branches";
import Cards from "./Cards";
import Cards2 from "./Cards2";
import Cards3 from "./Cards3";
import Hero from "./hero/Hero";
import Hero2 from "./hero2/Hero2";
import Hero3 from "./hero3/Hero3";
import Socials from "./Socials";
import WhyMicrosoft from "./WhyMicrosoft";

const Main = () => {
  return (
    <div className="main">
      <Hero />
      <Branches />
      <Cards />
      <Hero2 />
      <Cards2 />
      <Hero3 />
      <WhyMicrosoft />
      <Cards3 />
      <Socials />
    </div>
  );
};

export default Main;
