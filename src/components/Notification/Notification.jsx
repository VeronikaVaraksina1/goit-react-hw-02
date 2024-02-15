export default function Notification({ totalFeedback }) {
  return <>{totalFeedback <= 0 && <p>No feedback yet</p>}</>;
}
