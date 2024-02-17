import css from './Options.module.css';

const Options = ({ onUpdate, onReset, total }) => {
  return (
    <>
      <button className={css.button} onClick={() => onUpdate('good')}>
        Good
      </button>
      <button className={css.button} onClick={() => onUpdate('neutral')}>
        Neutral
      </button>
      <button className={css.button} onClick={() => onUpdate('bad')}>
        Bad
      </button>
      {total > 0 && (
        <button className={css.button} onClick={onReset}>
          Reset
        </button>
      )}
    </>
  );
};

export default Options;
