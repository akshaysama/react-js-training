import React, { Component } from 'react'

export class RegComp extends Component {
  render() {
    console.log("regular comp render")
    return (
      <div>Reg Component{this.props.name}</div>
    )
  }
}

export default RegComp