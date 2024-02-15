export default function Feedback({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedbacks,
}) {
  return (
    <>
      {totalFeedback > 0 && (
        <>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {totalFeedback}</p>
          <p>Positive: {positiveFeedbacks}%</p>
        </>
      )}
    </>
  );
}
