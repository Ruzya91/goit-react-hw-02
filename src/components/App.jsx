import React, { useState, useEffect } from 'react';
import '../components/App.css';
import Feedback from '../components/Feedback/Feedback';
import Options from '../components/Options/Options';
import Notification from '../components/Notification/Notification';
import Description from '../components/Description/Description';

const STORAGE_KEY = 'feedbackCounts';

function App() {
  const [feedback, setFeedback] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (type) => {
    setFeedback((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const { good, neutral, bad } = feedback;
  const total = good + neutral + bad;
  const goodNeutral = good + neutral;
  const positivePercentage =
    total > 0 ? Math.round((goodNeutral / total) * 100) : 0;

  return (
    <div className="App">
      <Description />

      <Options
        options={Object.keys(feedback)}
        onLeaveFeedback={updateFeedback}
        totalFeedback={total}
        onReset={resetFeedback}
      />

      {total > 0 ? (
        <Feedback
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
}

export default App;
