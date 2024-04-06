import { useMemo, useState } from 'react';

export const Memo = () => {
  let [firstNum, setFirstNum] = useState(0);
  let [secondNum, setSecondNum] = useState(0);
  const increment = () => {
    console.log('Here in increment');
    setFirstNum(++firstNum);
  };
  const decrement = () => {
    console.log('Here in decrement');
    setSecondNum(++secondNum);
  };

  const calcVal = useMemo(() => {
    let i = 1;
    while (i < 10000) {
      console.log('In square of first number');
      i++;
    }
    return firstNum * firstNum;
  }, [firstNum]);
  return (
    <>
      <h1>Counters</h1>
      <h2> Square of first number is {calcVal}</h2>
      <div>
        <span>{firstNum} </span>
        <button onClick={increment}>+</button>
      </div>

      <div>
        <span>{secondNum}</span>
        <button onClick={decrement}>-</button>
      </div>
    </>
  );
};
