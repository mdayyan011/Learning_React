import { useState } from 'react';
function Compo() {
  let [count, setCount] = useState(700);
  function handleClick() {
    setCount(count + 1);
    console.log('I am clicked ' + count);
  }
  return (
    <>
      <h1>{count}</h1>
      <div>
        <button onClick={handleClick}>+</button>
        <button>-</button>
      </div>
    </>
  );
}
export default Compo;
