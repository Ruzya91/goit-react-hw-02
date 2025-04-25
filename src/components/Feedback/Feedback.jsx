import React from 'react';
import styles from './Feedback.module.css';

const Feedback = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={styles.feedback}>
    <ul className={styles.list}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive: {positivePercentage}%</li>
    </ul>
  </div>
);
export default Feedback;
