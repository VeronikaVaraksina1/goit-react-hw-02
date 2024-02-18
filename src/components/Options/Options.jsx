import css from './Options.module.css';

const Options = ({ feedback, onUpdate, onReset, total }) => {
  return (
    <>
      {Object.keys(feedback).map(elem => (
        <button className={css.button} onClick={() => onUpdate(elem)} key={elem}>
          {elem}
        </button>
      ))}
      {total > 0 && (
        <button className={css.button} onClick={onReset}>
          Reset
        </button>
      )}
    </>
  );
};

export default Options;
