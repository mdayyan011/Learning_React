import React from 'react';
import { useEffect } from 'react';
const Child = (props) => {
  useEffect(() => {
    console.log('I am from use effect of child');
  }, []);
  return (
    <>
      {console.log('I am from child rendering')}
      <h2 style={{ color: 'red' }}>Child: {props.count}</h2>
    </>
  );
};
export default React.memo(Child);
