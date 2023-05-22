import React from 'react';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedbackHandler }) => (
  <div>
    {options.map(el => (
      <button
        onClick={() => onLeaveFeedbackHandler(el)}
        className={css.button}
        key={el}
      >
        {el}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
