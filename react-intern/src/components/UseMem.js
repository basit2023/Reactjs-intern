import React, { useState } from 'react';
import { useMemo } from 'react';
 const UseMem=()=> {
  const [count, setCount] = useState(0);
  
  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
    } // Simulate heavy computation
    console.log("the result is:",num)
    return num * 2;
  };
  console.log("the count is:",count);
  
  const result = expensiveCalculation(count);
  
  return (
    <div>
      <h1>Result: {result}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );


// const [count, setCount] = useState(0);
  
//   const expensiveCalculation = (num) => {
//     console.log("Calculating...");
//     for (let i = 0; i < 1000000000; i++) {} // Simulate heavy computation
//     console.log("the Num is:",num)
//     return num * 2;
//   };
  
//   const memoizedResult = useMemo(() => expensiveCalculation(count), [count]);
  
//   return (
//     <div>
//       <h1>Result: {memoizedResult}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
}

export default UseMem;