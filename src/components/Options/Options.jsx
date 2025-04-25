import React from 'react';
import styles from './Options.module.css';

const Options = ({ options, onLeaveFeedback, totalFeedback, onReset }) => (
  <div className={styles.options}>
    {options.map((option) => (
      <button
        key={option}
        type="button"
        className={styles.button}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
    {totalFeedback > 0 && (
      <button type="button" className={styles.reset} onClick={onReset}>
        Reset
      </button>
    )}
  </div>
);

export default Options;
