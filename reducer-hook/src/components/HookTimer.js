import React, {useState,useEffect,useRef} from 'react'


function HookTimer() {
    const [timer,setTimer] = useState(0)
    const intervalRef = useRef() 

    useEffect(()=>{
        intervalRef.current = setInterval(()=>{
            setTimer(prevTimer=> prevTimer + 1)
        },1000)
        return ()=>{
            console.log('clearing')
            clearInterval(intervalRef.current)
        }
    },[])
  return (
    <div>
        Hook Timer - {timer}
        <button onClick ={()=>clearInterval(intervalRef.current)}>Clear Hook</button>
    </div>
  )
}

export default HookTimer