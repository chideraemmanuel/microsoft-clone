import { FaChevronRight } from "react-icons/fa";

const WhyMicrosoft = () => {
  return (
    <section className="why-microsoft">
      <h3>Why shop at Misrosoft Store?</h3>
      <p>
        From free shipping and returns to expert assistance and online training,
        we're here to help you do more with best-in-class devices, software,
        games, and resources.
      </p>
      <a href="/">
        <span>
          <p>Learn about our promise</p>
        </span>
        <FaChevronRight />
      </a>
    </section>
  );
};

export default WhyMicrosoft;
