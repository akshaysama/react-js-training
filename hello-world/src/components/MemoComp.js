import React from 'react'

function MemoComp({name}) {
    console.log("rendering memo component")
  return (
    <div>MemoComp</div>
  )
}

export default React.memo(MemoComp)