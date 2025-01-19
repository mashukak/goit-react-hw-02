import styles from './Options.module.css';

const Options = ({ options, onLeaveFeedback, onReset, showReset }) => {
  return (
    <div className={styles.options}>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onLeaveFeedback(option)}
          className={styles.button}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
      {showReset && (
        <button onClick={onReset} className={styles.resetButton}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
