import React, { Fragment } from 'react'
import clases from './Input.module.css'

let Input = props => {
  return (
    <Fragment>
      <input
        className={clases.editable}
        placeholder={
          1
        }
        value={
          props.name || props.project || props.status || props.hours ||
          props.fullName || props.nameProject || props.status
        }
      />
    </Fragment>
  )
}
export default Input
