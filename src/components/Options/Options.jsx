export default function Options({ onUpdateFeedback, onUpdate, totalFeedback }) {
  return (
    <>
      <button onClick={() => onUpdateFeedback('good')}>Good</button>
      <button onClick={() => onUpdateFeedback('neutral')}>Neutral</button>
      <button onClick={() => onUpdateFeedback('bad')}>Bad</button>
      {totalFeedback > 0 && (
        <button
          onClick={() =>
            onUpdate({
              good: 0,
              neutral: 0,
              bad: 0,
            })
          }
        >
          Reset
        </button>
      )}
    </>
  );
}
