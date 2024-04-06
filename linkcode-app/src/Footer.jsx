import React from 'react';

function Footer(props) {
  console.log(props.dayWhen);
  return (
    <h3>
      {props.dayWhen} is my day {props.dayCount} of learning react
    </h3>
  );
}

export default Footer;
