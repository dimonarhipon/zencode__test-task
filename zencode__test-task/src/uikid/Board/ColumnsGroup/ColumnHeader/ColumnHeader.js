import React from 'react'
import clases from './ColumnHeader.module.css'
import EditableCell from '../../../Cells/EditableCell/EditableCell'

let HeaderColumn = props => {
  return (
    <th className={clases.title}>
      <EditableCell titleColumn={props.titleColumn} />
    </th>
  )
}
export default HeaderColumn
