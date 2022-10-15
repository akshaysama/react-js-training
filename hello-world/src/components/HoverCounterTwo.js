import React, { Component } from 'react'

class HoverCounterTwo extends Component {
    constructor(props){
        super(props)
        this.state ={
            count:0
        }
    }
  render() {
    return (
  <h2 onMouseOver = {this.props.incrementCount}>Hovered {this.props.count} times</h2>
    )
  }
}

export default HoverCounterTwo