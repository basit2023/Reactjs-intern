import React from 'react'

const AboutUs = ({number, email="basit0303", count, pressme}) => {
  console.log("the data is from props is:",number)
  return (
    <>
    <div className='bg-black text-white h-100 w-100'> Contect Info: {number}</div>
    <div className='bg-black text-white h-100 w-100'> Email Info: {email}</div>
    <p>Count: {count}</p>
      <button onClick={pressme}>Increment</button>
    </>
  )
 
}

export default AboutUs