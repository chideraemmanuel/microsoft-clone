import { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const Cards2 = () => {
  const [cards2, setCards2] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/cards2")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCards2(data);
      });
  }, []);

  return (
    <section className="cards2 container">
      <h3>For Business</h3>
      <div className="cards">
        {cards2 &&
          cards2.map((card, index) => (
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
      </div>
    </section>
  );
};

export default Cards2;
