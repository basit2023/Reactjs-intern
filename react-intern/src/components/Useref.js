import React, {useRef,useEffect, useState, useContext} from 'react'
import Layout from './Layout/Layout';
import { AuthContext } from '../AuthContext';
const Useref = () => {
  //   const countRef = useRef(0);
  //   const [state, setState] = useState(0);
  // console.log("page rendring:")
  //   const incrementRef = () => {
  //       // console.log("Current value", countRef)
  //     countRef.current += 1;
  //     console.log('Count using ref:', countRef.current);
  //   };
  
  //   const incrementState = () => {
  //     setState(state + 1);
  //   };
  
  //   return (
  //     <div>
  //       <h1>useRef Counter</h1>
  //       <p>Count (ref): {countRef.current}</p>
  //       <p>Count (state): {state}</p>
  //       <button onClick={incrementRef}> press Increment Ref</button>
  //       <div>
  //       <button onClick={incrementState}> Count Increment State</button>

  //       </div>
  //     </div>
  //   );
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);


    const { user } = useContext(AuthContext);
  

  return (
    <Layout title="Use Reffrance page" description="the is useraffrance description">
      <h1>{user?.name} Welcome to home page</h1>
      <h1>Previous Count: {prevCountRef.current}</h1>
      <h2>Current Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </Layout>
  );
}

export default Useref
