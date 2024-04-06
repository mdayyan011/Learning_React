import { useEffect, useState } from 'react';
import { Footer, MemoizedFooter } from './Footer';

export const Counter = () => {
  let [count, setCount] = useState(0);
  useEffect(() => {
    console.log('Counter App got rendered');
  }, []);
  let incrementValue = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>Count: {count}</h1>
      <button
        onClick={incrementValue}
        style={{ padding: '1%', marginLeft: '50%' }}
      >
        +
      </button>
      {console.log('Rendering Counter')}
      <MemoizedFooter count='100' />
    </>
  );
};
