import React from 'react';
import styles from './card.module.css';
const Card = ({ data, rate, display }) => {
  return (
    <div className={styles.card}>
      <img src={data.image} alt={data.name} />
      <p className={styles.text}>{data.name}</p>
      {display === '$' ? (
        <p className={styles.text}>{`${display}${data.cost.toFixed(2)}`}</p>
      ) : (
        <p className={styles.text}>{`${display}${(rate * data.cost).toFixed(
          2
        )}`}</p>
      )}
    </div>
  );
};

export default Card;
