import React, { Fragment } from 'react'

let Button = (props) => {
  return (
    <Fragment>
      <button onClick={props.onClick}>{props.value}</button>
    </Fragment>
    
  )
}
export default Button