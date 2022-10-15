import React, {useState} from "react"
export const UseState =()=>{
    const [count,setCount] = useState(0)
    console.log('UseState Render')
    return(
        <div>
            <button onClick ={()=> setCount((c)=> c+1)}>count - {count}</button>
            <button onClick ={()=>setCount(0)}></button>
        </div>
    )
}
export default UseState