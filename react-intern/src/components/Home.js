
import React, { useState } from 'react';
import Layout from './Layout/Layout';
function Home (){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [count, setCount]=useState(0)
    console.log("the name and email is:",name, email)
  const handleSubmit =(e)=>{
   e.preventDefault();
   alert(`Name:${name} Email:${email}`)
  }
        return(
            <Layout title="Home page" description="This is simple react application" >
            <h1 className=" bg-black text-4xl text-white mt-10"> Welcome to Home page: {count}</h1>
            <button className='bg-black text-white mr-10' onClick={()=>setCount(count+1)}> Increment</button>
            <button className='bg-black text-white' onClick={()=>setCount(count-1)}> Decrement</button>
            {/* <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <button type="submit">Submit</button>
    </form> */}
            </Layout>
        )
}
export default Home;