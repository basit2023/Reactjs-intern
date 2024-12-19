import React from 'react'
import { useState, useEffect } from 'react'
const UseEff = () => {
    const [data,setData] = useState([])
    const [loading, setLoading]=useState(true)
    const [count, setCount]=useState(0)
 useEffect(()=>{
        console.log("rednder after each click")
 },[count])
    return(
      <>
      <h1>THe counter is:{count}</h1>
      <button onClick={()=>setCount(count+1)}>Press me</button>
      </>
    )
//     useEffect(()=>{
//         const apidata= async ()=>{
//             try {
//                 setLoading(true)
//                 const data1 = await fetch("https://jsonplaceholder.typicode.com/posts")
//                 const result = await data1.json()
//                 console.log("the data is:",result)
//                 setData(result)
//             } catch (error) {
//                 console.log("the error is:",error)
                
//             }finally{
//                 setLoading(false)
//             }
//         }
//         apidata()
//     },[])

// if(loading) return(<p>Loading...</p>)
//     console.log("the id:",data[0].userId)
//   return (
//     <>
      


//       <div>
//       <h1> use state and useeffec Hooks</h1>
//       <h1> {data[0].title}</h1>
//         <ul>
            
//         {data?.map((x) => {
//             return (
//               <li key={x.id}>
//                 <h3>{x.title}</h3>
//                 <p>{x.body}</p>
//               </li>
//             )
//           })}
//         </ul>
//       </div>
//     </>
//   )
}

export default UseEff
