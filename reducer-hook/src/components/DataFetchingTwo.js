// import React,{useEffect,useReducer} from 'react'
// import axios from 'axios'
// const initialState ={
//     loading:true,
//     error:'',
//     post:{}
// }
// const reducer = (state,action)=>{
// switch(action.type){
//     case'Fetch_SUCCESS':
//     return{
//         loading:false,
//         post:action.payload,
//         error:''
//     }
//     case'FETCH_ERROR':
//      return{
//         loading:false,
//         post:{},
//         error:"somrthing went wrong"
//      }
//      default:
//         return state
// }
// }
// export function DataFetchingTwo() {
//     const[state,dispatch] =  useReducer(reducer,initialState)
//     useEffect(()=>{
//         axios.get('')
//         .then((res)=>{
//        dispatch({type:'FETCH_SUCCESS',payload:response.data})
//         })
//         .catch((error)=>{
//           dispatch({type:'FETCH_ERROR'})
//         })
//   return (
//     <div>
//          {state.loading?'loading':post.title}
//         {state.error?error:null}
//     </div>
//   )
// }

//  export default DataFetchingTwo

