import React, { Component } from "react";
import FeedbackOptions from "./feedbackOptions/FeedbackOptions";
import Statistics from "./statistics/Statistics";
import Section from "./section/Section";
import Notification from "./notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (option) => {
    this.setState((state) => ({
      [option]: state[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, point) => acc + point, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const condition = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    );
    return condition > 0 ? condition : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positiveFeedback={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message={"No feedback given"} />
          )}
        </Section>
      </>
    );
  }
}

export default App;
