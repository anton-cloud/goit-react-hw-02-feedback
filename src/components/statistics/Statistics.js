import React from "react";
import style from "./Statics.module.css";

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <ul className={style.list}>
      <li className={style.item}>
        <p>Good: {good}</p>
      </li>
      <li className={style.item}>
        <p>Neutral: {neutral}</p>
      </li>
      <li className={style.item}>
        <p>Bad: {bad}</p>
      </li>
      <li className={style.item}>
        <p>Total: {total}</p>
      </li>
      <li className={style.item}>
        <p>Positive feedback: {positiveFeedback} %</p>
      </li>
    </ul>
  );
};

export default Statistics;
