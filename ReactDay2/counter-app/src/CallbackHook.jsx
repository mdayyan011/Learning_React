import React from 'react';
export const CallbackHook = () => {
  return (
    <>
      <h1>Callback</h1>
    </>
  );
};

export const MemoizedCallBack = React.memo(CallbackHook);
