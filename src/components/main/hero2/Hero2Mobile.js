import hero2BgMobile from "../../../assets/images/hero2-bg-mobile.jpg";
import InfoCard from "../../InfoCard";

const Hero2Mobile = () => {
  return (
    <section className="hero2-mobile">
      <img src={hero2BgMobile} alt="Surface Laptop Go 2" />
      <InfoCard
        heading="Surface Laptop Go 2"
        details="A sleek laptop with a 12.4-inch touchscreen and great typing experience"
      />
    </section>
  );
};

export default Hero2Mobile;
