import React, { Component } from 'react'
import axios from "axios"

class PostList extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
         post:[],
         error:""
        }
      }
      componentDidMount(){
          axios.get("https://jsonplaces")
          .then(response=>{
            console.log(response)
            this.setState({post:response.data})
          })
          .catch(error=>{
            console.log(error)
            this.setState({ERRORmSG:"ERROR RETRIVING DATA"})
          })
      }
  render() {
   const{post,errorMsg} = this.state
    return (
      <div>
        list of posts
        {
        post.length?
        post.map(post=><div key={post.id}>{post.title}</div>):
        null
        }
        {
            errorMsg?<div>{errorMsg}</div>:null
        }
      </div>
    )
  }
}

export default PostList