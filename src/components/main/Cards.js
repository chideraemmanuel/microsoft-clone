import { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const Cards = () => {
  const [cards, setCards] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/cards")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCards(data);
      });
  }, []);

  return (
    <section className="cards container">
      {cards &&
        cards.map((card, index) => (
          <div className="card" key={index}>
            <img
              src={process.env.PUBLIC_URL + `/images/card-${card.id}.webp`}
              // src={card.src}
              alt={card.body}
            />
            <h3>{card.title}</h3>
            <p className="card-body">{card.body}</p>
            <a href="/">
              <span>
                <p>{card.link}</p>
              </span>
              <FaChevronRight />
            </a>
          </div>
        ))}
    </section>
  );
};

export default Cards;
