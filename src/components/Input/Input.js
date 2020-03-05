import React, { Fragment } from 'react'
import clases from './Input.module.css'

let Input = props => {
  return (
    <Fragment>
      <input
        className={clases.editable}
        placeholder={
          props.title || props.text || props.mounth || props.week
        }
      />
    </Fragment>
  )
}
export default Input
