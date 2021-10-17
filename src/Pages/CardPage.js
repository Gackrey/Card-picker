import { Card } from "../Components/Card";
import { cards_data } from "../card_data";
import { useState, useEffect } from "react";

export const CardPage = () => {
  const [cards, setCards] = useState(cards_data);
  const [picked, setPicked] = useState([]);
  const [error, setError] = useState(null);

  const shuffleCards = () => {
    setError(null);
    setPicked([]);
    let cards = cards_data.slice();
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    setCards(cards);
  };

  const handleCardPick = () => {
    if (cards.length < 5) {
      setError("No more possibalities to pick another 5 random cards");
    } else {
      let cardsCopy = cards;
      let pickedCards = [];
      for (let i = 0; i < 5; i++) {
        let idx = Math.floor(Math.random() * cardsCopy.length);
        pickedCards.push(cardsCopy[idx]);
        cardsCopy.splice(idx, 1);
      }
      setCards(cardsCopy);
      setPicked(pickedCards);
    }
  };
  useEffect(() => {
    shuffleCards();
  }, []);
  return (
    <div className="App">
      <div className="cards-container">
        {cards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
      <button onClick={shuffleCards}>Suffle</button>
      <button onClick={handleCardPick}>Pick 5 Cards</button>
      <div style={{ display: error ? "block" : "none" }} className="error">
        {error}
      </div>
      <div className="cards-container">
        {picked.map((card, index) => (
          <Card key={index} card={card} picked={true} />
        ))}
      </div>
    </div>
  );
};
