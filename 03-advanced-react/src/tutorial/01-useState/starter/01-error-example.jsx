const ErrorExample = () => {
  let count = 0;

  return (
    <div>
      <h2>{count}</h2>
      <button type="button" onClick={count}>
        Increase
      </button>
      <button type="button" onClick={count}>
        Decrease
      </button>
    </div>
  );
};

export default ErrorExample;
