import { useState, useEffect } from 'react';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';

export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedbacks = window.localStorage.getItem('saved-feedbacks');
    if (savedFeedbacks !== 0) {
      return JSON.parse(savedFeedbacks);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem('saved-feedbacks', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = feedbackType => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedbacks = Math.round(
    ((feedback.good + feedback.neutral) / totalFeedback) * 100
  );

  return (
    <>
      <Description />
      <Options
        onUpdateFeedback={updateFeedback}
        onUpdate={setFeedback}
        totalFeedback={totalFeedback}
      />
      <Feedback
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
        totalFeedback={totalFeedback}
        positiveFeedbacks={positiveFeedbacks}
      />
      <Notification totalFeedback={totalFeedback} />
    </>
  );
}
