import { useState, useEffect } from 'react';
import Child from './Child';
const Parent = () => {
  useEffect(() => {
    console.log('I am from use effect');
  }, []);
  let [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(++count);
  };
  return (
    <>
      {console.log('at line 9')}
      <h1>Parent </h1>
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>Add</button>
      <Child count={count} />
    </>
  );
};
export default Parent;
