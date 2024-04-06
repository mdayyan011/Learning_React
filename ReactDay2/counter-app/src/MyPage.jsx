import { CallbackHook } from './CallbackHook';
import React, { useState } from 'react';
export const MyPage = (props) => {
  let count = 0;
  let changeCount = () => {
    return count;
  };

  return (
    <React.Fragment>
      <CallbackHook fun={changeCount()} />
      {/* <button onClick={}></button> */}
    </React.Fragment>
  );
};
