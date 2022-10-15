import React, {useState,useEffect} from 'react'

function ClassCounterOne() {
    const [count,setCount] = useState(0)
    const [name,setName] = useState('')
    useEffect(()=>{
        console.log("use effect updating document title")
        document.title =`You clicked ${name}} times`
    },[name])
  return (
    <div>
        <input type ="text" value={name} onChange = {e=>setName(e.target.value)} />
        <button onClick = {()=>setCount(count + 1)}>click {count} times</button>
    </div>
  )
}

export default ClassCounterOne