import hero2BgDesktop from "../../../assets/images/hero2-bg-desktop.jpg";
import Button from "../../Button";

const Hero2Desktop = () => {
  return (
    <section className="hero2-desktop">
      <img src={hero2BgDesktop} alt="Surface Laptop Go 2" />
      <div className="hero2-text">
        <h2>Surface Laptop Go 2</h2>
        <p>
          A sleek laptop with a 12.4-inch touchscreen and great typing
          experience
        </p>
        <Button text="Shop now" />
      </div>
    </section>
  );
};

export default Hero2Desktop;
