import React from 'react';
// import
import css from 'components/FeedBackCounter/FeedBackCounter.module.css';
import { Statistics } from 'components/Statistics/Statistics';
import FeedbackOption from 'components/FeedbackOptions/FeedbackOptions ';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';

// export default FeedBack = () => {};
class FeedBackCounter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickHandle = e => {
    const { name } = e.currentTarget;
    this.setState({
      [name]: this.state[name] + 1,
    });
  };

  countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

  positivePercent = ({ good }) => {
    const total = this.countTotalFeedback(this.state);
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(this.state);
    const positivePercentage = this.positivePercent(this.state);
    return (
      <div className={css.counter}>
        <Section title="Please leave feedback">
          <FeedbackOption
            options={this.state}
            onLeaveFeedback={this.onClickHandle}
          />
        </Section>
        <Section>
          <h2>Statistics</h2>
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default FeedBackCounter;
