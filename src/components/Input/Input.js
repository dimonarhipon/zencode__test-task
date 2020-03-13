import React, { Fragment } from 'react'
import clases from './Input.module.css'

let Input = props => {
  return (
    <Fragment>
      <input
        className={clases.editable}
        placeholder={1}
        onChange={
          props.ChangefullName ||
          props.ChangeNameProject ||
          props.ChangeStatus ||
          props.ChangeMonthsFebraryHours0 ||
          props.ChangeMonthsFebraryHours1 ||
          props.ChangeMonthsFebraryHours2 ||
          props.ChangeMonthsFebraryHours3 ||
          props.ChangeMonthsMarthHours0 ||
          props.ChangeMonthsMarthHours1 ||
          props.ChangeMonthsMarthHours2 ||
          props.ChangeMonthsMarthHours3 ||
          props.ChangeMonthsAprilHours0 ||
          props.ChangeMonthsAprilHours1 ||
          props.ChangeMonthsAprilHours2 ||
          props.ChangeMonthsAprilHours3 ||
          props.ChangeMonthsAprilHours4 
        }
        value={
          props.name ||
          props.project ||
          props.status ||
          props.hours ||
          props.fullName ||
          props.nameProject ||
          props.status

        }
      />
    </Fragment>
  )
}
export default Input

