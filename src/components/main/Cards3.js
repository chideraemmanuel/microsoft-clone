import { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const Cards3 = () => {
  const [cards3, setCards3] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/cards3")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCards3(data);
      });
  }, []);

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
