import { useEffect, useState } from 'react';
import Second from './Second';
import Third from './Third';
const First = () => {
  let [count, setCount] = useState(0);
  useEffect(() => {
    console.log('First Effect got called.');
  }, [count]);

  const handleSubmit = () => {
    console.log('Handle submit got called.');
    setCount(++count);
  };
  return (
    <>
      {console.log('First compo is rendering')}
      <h1>Counter: {count} </h1>
      <button onClick={handleSubmit}>+</button>
      <Second count={count} />
      <Third />
    </>
  );
};
export default First;
