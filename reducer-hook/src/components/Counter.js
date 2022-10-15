import React, {useState,useMemo} from 'react'


function Counter() {
    const [CounterOne, setCounterOne] = useState(0)
    const [CounterTwo,setCounterTwo] = useState(0)
    const incrementTwo = ()=>{
        setCounterTwo(CounterTwo - 1)
    }
    const incrementOne = ()=>{
        setCounterOne(CounterOne  + 1)
    }
const  isEven =   useMemo(()=>{
        
            let i = 0
            while(i<2000000000) i++
            return CounterOne % 2 === 0 
    },[CounterOne])
   
  return (
    <div>
        <button onClick = {incrementOne}> Count {CounterOne}</button>
        <span> {isEven?'Even':'odd'}</span>
        <div> <button onClick = {incrementTwo}>Count {CounterTwo}</button></div>
       
    </div>
  )
}

export default Counter