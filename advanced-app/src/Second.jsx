import { useEffect } from 'react';
import React from 'react';

const Second = (props) => {
  const { count } = props;
  useEffect(() => {
    console.log('Second use effect called');
  }, []);
  return (
    <>
      {console.log('Second compo is rendering')}
      <h1>Second count: {count}</h1>
    </>
  );
};
export default React.memo(Second);
