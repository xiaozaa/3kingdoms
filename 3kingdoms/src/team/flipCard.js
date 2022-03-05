import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

import styles from "./flipCard.module.css";

export const FlipCard = (data) => {
  const [isFlipped, setIsFlipped] = useState(data.props.isFlipped);

  return (
    <div
      className={styles.flipCardsWrapper}
      onMouseEnter={() => {
        setIsFlipped(true);
      }}
      onMouseLeave={() => {
        setIsFlipped(false);
      }}
    >
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div>
          <img src={data.props.front} />
        </div>
        <div>
          <img src={data.props.back} />
        </div>
      </ReactCardFlip>
    </div>
  );
};
