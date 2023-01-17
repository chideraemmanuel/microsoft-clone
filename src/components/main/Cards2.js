import { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const Cards2 = () => {
  const [cards2, setCards2] = useState([
    {
      id: "5",
      src: "process.env.PUBLIC_URL + '/images/card-5.webp'",
      title: "Surface Pro 9 for Business",
      body: "Empower flexible, all-day impact with tablet portability and laptop performance. Questions? Book an online consultation.",
      link: "Shop now",
      link2: "Book a consultation.",
      tag: "New",
    },
    {
      id: "6",
      src: "process.env.PUBLIC_URL + '/images/card-6.webp'",
      title: "Get Microsoft Teams for free",
      body: "Online meetings, chat, and shared cloud ctorage--all in one place.",
      link: "Sign up for free",
    },
    {
      id: "7",
      src: "process.env.PUBLIC_URL + '/images/card-7.webp'",
      title: "Welcome to your Windows 365 Cloud PC",
      body: "Securely stream your Windows experience from the Microsoft cloud to any device.",
      link: "Get it today",
    },
    {
      id: "8",
      src: "process.env.PUBLIC_URL + '/images/card-8.webp'",
      title: "Thrive in a hybrid world",
      body: "Discover tools, resources, and strategies to help your employees succeed in the new world of flexible work.",
      link: "Learn more",
    },
  ]);

  // useEffect(() => {
  //   fetch("http://localhost:8000/cards2")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setCards2(data);
  //     });
  // }, []);

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
