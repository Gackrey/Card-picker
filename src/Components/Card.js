import { useState } from "react";

export const Card = ({ card,picked }) => {
  const [image, setImage] = useState("");

  (function (image) {
    import(`../../public/Images/${image}.png`).then((imageData) =>
      setImage(imageData.default)
    );
  })(card.suit);

  return (
    <div className={`${picked?'card picked':'card overlap'}`}>
      <div className="top">
        <div>{card.value}</div>
        <img src={image} alt="card-symbol" />
      </div>
      <div className="center">
        <img src={image} alt="card-symbol" />
      </div>
      <div className="bottom">
        <div>{card.value}</div>
        <img src={image} alt="card-symbol" />
      </div>
    </div>
  );
};
