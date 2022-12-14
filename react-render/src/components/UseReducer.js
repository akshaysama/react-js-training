import React, {useReducer} from 'react'
const initialState = 0
const reducer = (state,action)=>{
    switch(action){
        case'increment':return state +1
        case 'dercrement':return state - 1
        case 'reset': return initialState
        default: return state
    }
}
export const UseReducer = () => {
   const [count,dispatch] = useReducer(reducer,initialState)
   console.log('usereducer render')
  return (
    <div>
        <div>{count}</div>
        <button onClick={()=>dispatch('increment')}></button>
        <button onClick={()=> dispatch('increment')}>Increment</button>
        <button onClick={()=> dispatch('reset')}>RESET</button>
    </div>
  )
}
