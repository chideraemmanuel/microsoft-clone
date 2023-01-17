import { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const Cards3 = () => {
  const [cards3, setCards3] = useState([
    {
      id: "9",
      src: "process.env.PUBLIC_URL + '/images/card-9.webp'",
      title: "Free 2-3 day shipping",
      body: "Enjoy free expedited shipping, or choose ground shipping (3-7 business days) for lower carbon emissions on eligible orders in the contiguous US.",
      link: "Learn more",
    },
    {
      id: "10",
      src: "process.env.PUBLIC_URL + '/images/card-10.webp'",
      title: "Free 30-day returns",
      body: "Return almost any like-new product in its original packaging within 30 days (up to 60 days for Surface devices*).",
      link: "Learn more",
    },
    {
      id: "11",
      src: "process.env.PUBLIC_URL + '/images/card-11.webp'",
      title: "Flexible payment options that start at 0% APR",
      body: "Get what you want, when you want it with safe, simple payment options.",
      link: "Learn more",
    },
    {
      id: "12",
      src: "process.env.PUBLIC_URL + '/images/card-12.webp'",
      title: "30-day price promise",
      body: "If you make a purchase from Microsoft Store and we lower the price within 30 days (up to 60 days for Surface devices), we'll refund you the difference. Exclusions may apply.*",
      link: "Learn more",
    },
  ]);

  // useEffect(() => {
  //   fetch("http://localhost:8000/cards3")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setCards3(data);
  //     });
  // }, []);

  return (
    <section className="cards cards3 container">
      {cards3 &&
        cards3.map((card, index) => (
          <div className="card" key={index}>
            <img
              src={process.env.PUBLIC_URL + `/images/card-${card.id}.webp`}
              // src={card.src}
              alt={card.body}
            />
            {card.tag && <span className="tag">{card.tag}</span>}
            <h3>{card.title}</h3>
            <p className="card-body">{card.body}</p>
            <div className="card-links">
              <a href="/">
                <span>
                  <p>{card.link}</p>
                </span>
                <FaChevronRight />
              </a>
              {card.link2 && (
                <a href="/">
                  <span>
                    <p>{card.link2}</p>
                  </span>
                  <FaChevronRight />
                </a>
              )}
            </div>
          </div>
        ))}
    </section>
  );
};

export default Cards3;
