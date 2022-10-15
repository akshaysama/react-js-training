import React, {useState} from "react"
function HookCounterTwo(){
    const initialCount = 0
    let incrementFive = ()=>{
        for(let i=0;i<5;i++){
            ount(prevCount => prevCount +  1)
        }
    }
    const[count,ount] = useState(initialCount)
    return(
        <div>
            COunt:{count}
            <button onClick ={()=> ount(initialCount)} >Reset</button>
            <button onClick ={()=>ount(testing=> testing + 1)}>Increment</button>
            <button onClick ={incrementFive}>Decrement</button>
        </div>
    )
}
export default HookCounterTwo