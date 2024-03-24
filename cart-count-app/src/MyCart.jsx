import { useState } from 'react';

function MyCart() {
  let [count, setCount] = useState(566);

  function handleIncreement() {
    console.log(count);
    console.log(setCount);
    setCount(count + 1);
    console.log('I am clicked ' + count);
  }
  function handleDecrement() {
    setCount(--count);
  }
  return (
    <>
      <h1>My Cart</h1>
      <h2>{count}</h2>
      <div className='main-container'>
        <button onClick={handleIncreement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
    </>
  );
}







export default MyCart;
