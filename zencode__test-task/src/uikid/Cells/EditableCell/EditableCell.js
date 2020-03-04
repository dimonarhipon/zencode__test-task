import React, { Fragment } from 'react'
import clases from './EditableCell.module.css'

let EditableCell = props => {
  return (
    <Fragment>
      <input
        className={clases.editable}
        placeholder={
          props.titleColumn || props.text || props.title || props.rowsData
        }
      />
    </Fragment>
  )
}
export default EditableCell
