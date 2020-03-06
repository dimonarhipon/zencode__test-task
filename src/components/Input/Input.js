import React, { Fragment } from 'react'
import clases from './Input.module.css'

let Input = props => {
  return (
    <Fragment>
      <input
        onChange={props.changeTitleName || props.changeTitleProject || props.changeTitleStatus ||
          props.changeTextName1 || props.changeTextName2 || props.changeTextName3 ||
          props.changeTextProject1 || props.changeTextProject2 || props.changeTextProject3 ||
          props.changeTextStatus1 || props.changeTextStatus2 || props.changeTextStatus3 ||
          props.changeTextMounth1 || props.changeTextMounth2 || props.changeTextMounth3
        }
        className={clases.editable}
        value={
          props.title || props.text || props.mounth || props.week || props.number
        }
      />
    </Fragment>
  )
}
export default Input
