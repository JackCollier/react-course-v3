import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  const handleClick = (bool) => {
    if (bool === true) {
      setCount(count + 1);
    }
    if (bool === false) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <h2>{count}</h2>
      <button type="button" className="btn" onClick={() => handleClick(true)}>
        Increase
      </button>
      <button type="button" className="btn" onClick={() => handleClick(false)}>
        Decrease
      </button>
    </div>
  );
};

export default UseStateBasics;
