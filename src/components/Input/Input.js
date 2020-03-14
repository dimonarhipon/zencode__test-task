import React, { Fragment } from 'react'
import clases from './Input.module.css'

let Input = props => {
  let ChangeHours = (event) => {
    props.ChangeMonthsHours(props.id, event)
  }
  return (
    <Fragment>
      <input
        className={clases.editable}
        placeholder={1}
        onChange={
          props.ChangefullName ||
          props.ChangeNameProject ||
          ChangeHours 
        }
        value={
          props.name ||
          props.project ||
          props.number ||
          props.fullName ||
          props.nameProject ||
          props.status
        }
      />
    </Fragment>
  )
}
export default Input