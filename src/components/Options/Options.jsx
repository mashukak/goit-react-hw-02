import React from "react";

const Options = ({ options, onLeaveFeedback, onReset, showReset }) => {
  return (
    <div>
      {options.map((option) => (
        <button key={option} onClick={() => onLeaveFeedback(option)}>
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
      {showReset && (
        <button onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
