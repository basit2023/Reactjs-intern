import React, {useState, useCallback} from 'react'
import Button from './Button';
const Usecallback = () => {
    // const [count, setCount] = useState(0);
    // const [otherCount, setOtherCount] = useState(0);
  
    // // Function is created on every render
    // const increment = () => {
    //   setCount(prevCount => prevCount + 1);
    // };
  
    // return (
    //   <div>
    //     <h1 className='font-bold'>Without useCallback</h1>
    //     <p>Count in Button: {count}</p>
    //     <Button onClick={increment}>Increment Count</Button>
    //     <div>
    //     <button onClick={() => setOtherCount(otherCount + 1)}>
    //       Button on usecallback function :{otherCount}
    //     </button>
    //     </div>
    //   </div>
    // );




    const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  // Memoize the increment function so it is not re-created on every render
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []); // No dependencies, so it will be created only once

  return (
    <div>
      <h1>With useCallback</h1>
      <p>Count: {count}</p>
      <Button onClick={increment}>Increment Count</Button>
     <div>
     <button onClick={() => setOtherCount(otherCount + 1)}>
        Update Other Count ({otherCount})
      </button>
     </div>
    </div>
  );
}



export default Usecallback
