import { useState } from 'react';
import Child from './Child';

const Parent = () => {
  let [count, setCount] = useState(0);
  let add = () => {
    setCount(count + 1);
  };
  return (
    <>
      {console.log('parent is rendering')}
      <h1>Count: {count}</h1>
      <button onClick={add}> Add</button>
      <Child count='12' />
    </>
  );
};

export default Parent;
