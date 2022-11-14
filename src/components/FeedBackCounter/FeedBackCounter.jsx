import { useState } from 'react';
import css from 'components/FeedBackCounter/FeedBackCounter.module.css';
import { Statistics } from 'components/Statistics/Statistics';
import FeedbackOption from 'components/FeedbackOptions/FeedbackOptions ';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';

export default function FeedBackCounter() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onClickHandle = e => {
    const { name } = e.currentTarget;
    switch (name) {
      case 'good':
        setGood(p => p + 1);
        break;
      case 'neutral':
        setNeutral(p => p + 1);
        break;
      case 'bad':
        setBad(p => p + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const positivePercent = () => {
    const total = countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  return (
    <div className={css.counter}>
      <Section title="Please leave feedback">
        <FeedbackOption
          options={{ good, neutral, bad }}
          onLeaveFeedback={onClickHandle}
        />
      </Section>
      <Section>
        <h2>Statistics</h2>
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={positivePercent}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
}
