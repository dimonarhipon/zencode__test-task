import React, { Fragment } from 'react'
import clases from './Input.module.css'

let Input = props => {
  return (
    <Fragment>
      <input
        className={clases.editable}
        placeholder={
          props.titleColumn || props.text || props.title || props.number
        }
      />
    </Fragment>
  )
}
export default Input
