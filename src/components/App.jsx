import React, { useState } from 'react';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';

const App = () => {
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
    <div
      style={{
        height: '100vh',
        fontSize: 40,
        color: '#010101',
        textAlign: 'center',
      }}
    >
      <Section title="Please Leave Feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedbackHandler={option => {
            switch (option) {
              case 'good':
                handleGood();
                break;
              case 'bad':
                handleBad();
                break;
              case 'neutral':
                handleNeutral();
                break;
              default:
                break;
            }
          }}
        />
      </Section>
      <Section title="Statistics">
        {countTotal() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotal()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback Given" />
        )}
      </Section>
    </div>
  );
};

export default App;
