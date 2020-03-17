import React, { Fragment } from 'react'
import clases from './Input.module.css'

let Input = props => {
  let onChange = (event) => {
    props.handlerChange(props.id, event, props.month)
  }
  return (
    <Fragment>
      <input
        className={clases.editable}
        placeholder={1}
        onChange={
          props.ChangeName ||
          onChange 
        }
        value={props.value}
      />
    </Fragment>
  )
}
export default Input