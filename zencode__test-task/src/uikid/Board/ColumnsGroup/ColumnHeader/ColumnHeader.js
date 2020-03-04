import React from 'react'
import clases from './ColumnHeader.module.css'
import EditableCell from '../../../Cells/EditableCell/EditableCell'

let HeaderColumn = () => {
  return (
    <th className={clases.title}>
      <EditableCell />
    </th>
  )
}
export default HeaderColumn
