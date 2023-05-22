import React, { useState } from 'react';
import css from './Feedback.module.css';

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(prevGood => prevGood + 1);
  };

  const handleNeutral = () => {
    setNeutral(prevNeutral => prevNeutral + 1);
  };

  const handleBad = () => {
    setBad(prevBad => prevBad + 1);
  };

  const countTotal = () => {
    const sum = good + neutral + bad;
    return sum;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotal();
    return total ? Math.round((good / total) * 100) : 0;
  };

  return (
    <div>
      <h1>Please Leave feedback</h1>
      <div className={css.buttons}>
        <button className={css.button} type="button" onClick={handleGood}>
          Good
        </button>
        <button className={css.button} type="button" onClick={handleNeutral}>
          Neutral
        </button>
        <button className={css.button} type="button" onClick={handleBad}>
          Bad
        </button>
      </div>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {countTotal()}</p>
      <p>Positive Feedback: {countPositiveFeedbackPercentage()}%</p>
    </div>
  );
};

export default Feedback;
