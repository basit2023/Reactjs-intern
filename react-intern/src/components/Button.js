import React from 'react';

function Button({ onClick, children }) {
  console.log('Button component re-rendered');
  return <button onClick={onClick}>{children}</button>;
}

export default React.memo(Button);