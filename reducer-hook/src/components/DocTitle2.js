import React, {useState} from "react"
import UseDocumentTitle from "../hooks/useDocumentTitle"


function DocTitleTwo() {
    const[count,setCount] = useState(0)
   UseDocumentTitle (count)
  return (
    <div><button onClick={()=>setCount(count + 1)} >
        Count
        </button>
        </div>
  )
}

export default DocTitleTwo