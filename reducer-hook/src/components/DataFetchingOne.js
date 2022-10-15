import React from 'react'
import axios from 'axios'
import  {useEffect,useState}from 'react'

function DataFetchingOne() {
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState('initialState')
    const [post,setPost] = useState({})
    useEffect(()=>{
    axios.get('ht')
    .then((res)=>{
        setLoading(false)
        setPost(res.data)
        setError('')
    })
    .catch((error)=>{
        setLoading(false)
        setPost({})
        setError('something went wrong')
    })
    },[setError])
  return (
    <div>
        {loading?'loading':post.title}
        {error?error:null}
    </div>
  )
}

export default DataFetchingOne