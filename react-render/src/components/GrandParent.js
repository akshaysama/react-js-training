import React,{useState} from 'react'

export const GrandParent = () => {
    const [newCount,setNewCount] = useState(0)
  return (
    <div>
        <button onClick ={()=>setNewCount((nc)=> nc + 1)}> GrandParent  count {newCount}</button>
        <ParentOne>
            <ChildOne />
        </ParentOne>
    </div>
  )
}
