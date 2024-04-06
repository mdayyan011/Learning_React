import React, { useEffect } from 'react';

export function Footer(props) {
  useEffect(() => {
    console.log('Footer got rendered');
  }, []);
  return (
    <>
      {console.log('Rendering Footer')}
      <h2>Counter From Footer: {props.count}</h2>
    </>
  );
}

export const MemoizedFooter = React.memo(Footer);
