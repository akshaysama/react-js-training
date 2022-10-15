import React, { Component } from 'react'
import Frinput from "./FrInput"

 class FRParentInput extends Component {
    constructor(props){
        super(props)
        this.inputRef = React.createRef()

    }
    clickHandler = ()=>{
        this.inputRef.current.focus()
    }
  render() {
    return (
      <div>
        <Frinput ref = {this.inputRef} />
        <button onClick = {this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default FRParentInput