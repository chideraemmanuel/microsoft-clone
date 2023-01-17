// import { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const Cards = () => {
  // const [cards, setCards] = useState(null);

  // useEffect(() => {
  //   fetch("http://localhost:8000/cards")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setCards(data);
  //     });
  // }, []);

  const cards = [
    {
      id: "1",
      src: "process.env.PUBLIC_URL+'/images/card-1.webp'",
      title: "Building skills for jobs",
      body: "Since 2020, Microsoft and LinkedIn have helped 80 million people access digital skills, Learn what's next in our work to ensure people have the technology, skills and opportunity to thrive in changing economy.",
      link: "Explore programs",
    },
    {
      id: "2",
      src: "process.env.PUBLIC_URL + '/images/card-2.webp'",
      title: "Save up to $300 on Surface Laptop 5",
      body: "Sophisticated style and multitasking speed powered by 12th Gen Intel Core. Offer ends 1/22.",
      link: "Shop Surface Laptop 5",
    },
    {
      id: "3",
      src: "process.env.PUBLIC_URL + '/images/card-3.webp'",
      title: "Power your adventure",
      body: "Get an Xbox Series X and Forza Horizon 5 Premium Edition.",
      link: "Shop Xbox Series X Bundle",
    },
    {
      id: "4",
      src: "process.env.PUBLIC_URL + '/images/card-4.webp'",
      title: "Save up to $236 on new Surface Pro 9",
      body: "The tablet flexibility you want and the laptop performance you need--all in one ultra-portable device. Offer ends 1/15.",
      link: "Shop Surface Pro 9",
    },
  ];

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
