import React from 'react';
const Child = (props) => {
  return (
    <>
      {console.log('child is rendering')}
      <h1>Child count: {props.count}</h1>
    </>
  );
};

export default React.memo(Child);
