import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";

const Socials = () => {
  return (
    <section className="socials container">
      <span>Follow Microsoft</span>
      <a href="/">
        <FaFacebookF />
      </a>
      <a href="/">
        <FaTwitter />
      </a>
      <a href="/">
        <FaLinkedin />
      </a>
    </section>
  );
};

export default Socials;
